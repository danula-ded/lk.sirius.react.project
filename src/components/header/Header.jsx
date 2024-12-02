import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { NavLink } from "react-router-dom";
import "./Header.css";

import { AppRoute } from "../../const";

import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';
import { User } from '@consta/uikit/User';

const getStyleForNavLink = ({ isActive }) =>
    isActive
        ? {
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
            borderRadius: '20px',
        }
        : {};

const Header = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Layout className="header">
            <NavLink to="https://github.com/danula-ded" style={{ textDecoration: 'none' }}>
                <Text size="2xl" lineHeight="m" view="primary" className="header__title">
                    Ступишин Даниил
                </Text>
            </NavLink>
            <Layout className="header__nav">
                <Layout className="header__nav-buttons">
                    <NavLink to={AppRoute.main} style={getStyleForNavLink}>
                        <Button size='l' label="Главная" view="clear" form="round" />
                    </NavLink>
                    <NavLink to={AppRoute.service} style={getStyleForNavLink}>
                        <Button size='l' label="Услуги" view="clear" form="round" />
                    </NavLink>
                </Layout>
                <Layout>
                    {token && user ? (
                        <Layout className="header__registration">
                            <NavLink to={AppRoute.user} style={getStyleForNavLink}>
                                <User
                                    size="l"
                                    avatarUrl={user.image || "https://via.placeholder.com/40"}
                                    name={`${user.firstName} ${user.lastName}`}
                                    info={`${user.email}`}
                                    className="header__registration"
                                />
                            </NavLink>
                            <Button
                                size="l"
                                label="Выход"
                                view="clear"
                                form="round"
                                className="header__logout"
                                onClick={handleLogout}
                            />
                        </Layout>
                    ) : (
                        <NavLink to={AppRoute.auth} style={getStyleForNavLink} className={"header__link"}>
                            <Button size="l" label="Вход" view="clear" form="round" className="header__registration" />
                        </NavLink>
                    )}
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Header;
