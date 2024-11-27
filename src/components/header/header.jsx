import React from "react";
import "./header.css";

import { NavLink } from "react-router";

import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';

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
                    <NavLink to="/">
                        <Button size='l' label="Главная" view="ghost" form="roundBrick" />
                    </NavLink>
                    <NavLink to="/service">
                        <Button size='l' label="Услуги" view="clear" />
                    </NavLink>
                </Layout>
                <Layout className="header__registration">
                    <Button size='l' label="Регистрация" view="clear" />
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Header;