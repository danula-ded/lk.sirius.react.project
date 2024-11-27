import React from "react";
import "./header.css";

import { AppRoute } from "../../const";

import { NavLink } from "react-router";

import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';

const getStyleForNavLink = ({ isActive }) =>
    isActive
        ? {
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
            borderRadius: '20px',
        }
        : {}
    ;

const Header = () => {
    return (
        <Layout className="header">
            <NavLink to="https://github.com/danula-ded">
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
                <Layout className="header__registration">
                    <Button size='l' label="Регистрация" view="clear" form="round" />
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Header;