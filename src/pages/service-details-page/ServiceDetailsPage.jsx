import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fakeServices } from "../../__mocks__/fakeDate";
import { fetchServiceDetails } from "../../store/api-actions";
import "./ServiceDetailsPage.css";
import { Loader } from '@consta/uikit/Loader';


const ServiceDetailsPage = () => {
    const { id } = useParams();
    const [serviceId, setServiceId] = useState(Number(id));
    const [service, setService] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const totalServices = fakeServices.length;

    useEffect(() => {
        let isNeedUpdate = true;
        setIsLoading(true);
        fetchServiceDetails(serviceId)()
            .then((service) => {
                if (isNeedUpdate) {
                    setService(service);
                    setIsLoading(false);
                }
            })
            .catch(() => {
                setService(null);
                setIsLoading(false);
            });

        return () => (isNeedUpdate = false);
    }, [serviceId]);

    const handlePrev = () => {
        if (serviceId > 1) setServiceId(serviceId - 1);
    };

    const handleNext = () => {
        if (serviceId < totalServices) setServiceId(serviceId + 1);
    };

    return (
        <div className="service-details-page">
            <h1>Service Details</h1>
            {isLoading ? (
                <Loader size="m" />
            ) : service ? (
                <div className="service-content">
                    <img
                        src={fakeServices[serviceId - 1]?.image || ""}
                        alt={service.name}
                        className="service-image"
                    />
                    <h3 className="service-title">Название: {service.name}</h3>
                    <h3 className="service-description">Описание: {service.description}</h3>
                </div>
            ) : (
                <div className="error-message">Сервис не найден</div>
            )}
            <div className="service-indicator">
                <button onClick={handlePrev} className="btn" disabled={serviceId <= 1}>
                    Prev
                </button>
                <h3 className="indicator">Индикатор: {serviceId}</h3>
                <button onClick={handleNext} className="btn" disabled={serviceId >= totalServices}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;
