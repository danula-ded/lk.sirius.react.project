import React from 'react';
import './App.css';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Responses404 } from '@consta/uikit/Responses404';

import { AppRoute } from '../../const';

import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePage';
import ServiceDetailsPage from '../../pages/service-details-page/ServiceDetailsPage';
import AuthPage from '../../pages/auth-page/AuthPage';
import ProfilePage from '../../pages/profile-page/ProfilePage';
import ScrollToTop from '../scroll-to-top/ScrollToTop';

import MainLayout from '../../layouts/main-layouts/MainLayout';

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from '@consta/uikit/Button';

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  return token ? children : <Navigate to="/auth" />;
};

const App = function () {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoute.service} element={<ServicePage />} />
            <Route path={AppRoute.serviceDetails} element={<ServiceDetailsPage />} />
            <Route path={AppRoute.auth} element={<AuthPage />} />
            <Route path={AppRoute.user} element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
          </Route>
          <Route path="*" element={<Responses404 actions={<Button label={"Вернуться назад"} onClick={() => window.history.back()} />} />} />
        </Routes>
      </BrowserRouter>


    </Theme >
  );
}

export default App;
