import React from "react";
import "./ServicePage.css";
import CardServices from "../../components/card_services/CardServices";

const ServicePage = () => {
    return (
        <div>
            <h1 className="service-page-title">ServicePage</h1>
            <CardServices />
        </div>
    );
};

export default ServicePage;