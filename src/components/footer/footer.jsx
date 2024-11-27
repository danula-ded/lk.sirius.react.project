import React from 'react';
import './footer.css';

import { NavLink } from "react-router";

import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';

const Footer = () => {
    return (
        <Layout className="footer">
            <Layout className="footer__nav">
                <Layout className="footer__nav-buttons">
                <NavLink to="/">
                    <Button size="l" label="Контакты" view="clear" />
                </NavLink>
                <NavLink to="/service">
                    <Button size="l" label="О нас" view="ghost" form="brickRound" />
                </NavLink>
                </Layout>
            </Layout>
            <Text size='xl' lineHeight="m" view="primary" className="footer__title">
                © Ступишин Даниил
            </Text>
        </Layout>
    );
};

export default Footer;
