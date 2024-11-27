import React from 'react';
import './App.css';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Responses404 } from '@consta/uikit/Responses404';


import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePage';
import ServiceDetailsPage from '../../pages/service-details-page/ServiceDetailsPage';

import MainLayout from '../../layouts/main-layouts/MainLayout';


const App = function () {
  return (
    <Theme preset={presetGpnDefault}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/service" element={<ServicePage />} /> 
            <Route path="/service/:id" element={<ServiceDetailsPage />} />
          </Route>
          <Route path="*" element={<Responses404 />} />
        </Routes>
      </BrowserRouter>


    </Theme >
  );
}

export default App;