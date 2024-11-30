import { ApiPath } from "../const";

export const fetchNews = () => async () => {
    const response = await fetch(ApiPath.news, { method: 'GET' });
    return await response.json();
};

export const fetchServices = () => async () => {
    const response = await fetch(ApiPath.services, { method: 'GET' });
    return await response.json();
};