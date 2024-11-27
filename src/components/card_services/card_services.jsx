import React from 'react';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, description }) => (
    <Card
        verticalSpace="l"
        horizontalSpace="l"
        shadow
        className="service-card"
    >
        <Text size="l" weight="bold">{title}</Text>
        <Text>{description}</Text>
    </Card>
);

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ServiceCard;
