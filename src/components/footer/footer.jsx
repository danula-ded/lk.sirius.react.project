import React from 'react';
import './footer.css';

import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';

const Footer = () => {
    return (
        <Layout className="footer">
            <Layout className="footer__nav">
                <Layout className="footer__nav-buttons">
                    <Button size="l" label="Контакты" view="clear" />
                    <Button size="l" label="О нас" view="ghost" form="brickRound" />
                </Layout>
            </Layout>
            <Text size='xl' lineHeight="m" view="primary" className="footer__title">
                @ Ступишин Даниил
            </Text>
        </Layout>
    );
};

export default Footer;
