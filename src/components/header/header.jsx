import React from "react";
import "./header.css";

import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';

const Header = () => {
    return (
        <Layout className="header">
            <Text size="2xl" lineHeight="m" view="primary" className="header__title">
                Ступишин Даниил
            </Text>
            <Layout className="header__nav">
                <Layout className="header__nav-buttons">
                    <Button size='l' label="Главная" view="ghost" form="roundBrick" />
                    <Button size='l' label="Услуги" view="clear" />
                </Layout>
                <Layout className="header__registration">
                    <Button size='l' label="Регистрация" view="clear" />
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Header;