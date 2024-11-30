import React, { useEffect, useState } from "react";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import { Loader } from "@consta/uikit/Loader";
import "./CardNews.css";
import { fetchNews } from "../../store/api-actions";

const CardNews = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchNews()()
            .then((data) => {
                setNews(data); // Сохраняем загруженные данные в состояние
                setIsLoading(false); // Отключаем лоудер
            })
            .catch(() => {
                setIsLoading(false); // Отключаем лоудер даже при ошибке
            });
    }, []);

    return (
        <div className="news-list">
            {isLoading ? (
                <Loader size="m" />
            ) : (
                news.map((item) => (
                    <Card
                        key={item.id}
                        verticalSpace="xl"
                        horizontalSpace="xl"
                        shadow
                        className="news-item"
                    >
                        <img src={item.image} alt={item.title} className="news-image" />
                        <div className="news-content">
                            <Text size="xl" weight="bold" className="news-title">
                                {item.name}
                            </Text>
                            <Text size="m" view="secondary" className="news-description">
                                {item.description}
                            </Text>
                            <Text size="s" view="ghost" className="news-date">
                                {item.createdAt.slice(0, 10)}
                            </Text>
                        </div>
                    </Card>
                ))
            )}
        </div>
    );
};

export default CardNews;
