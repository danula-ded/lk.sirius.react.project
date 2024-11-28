import React from "react";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import "./CardNews.css"; // Для стилей (по желанию)

const CardNews = () => {
    const news = [
        {
            id: 1,
            title: 'Искусственный интеллект на службе медицины',
            description: 'Как AI помогает диагностировать заболевания и улучшать здоровье.',
            date: '26 ноября 2024',
            image: 'https://mshp.rkomi.ru/uploads/images/485264jpg_1601466489.jpeg',
        },
        {
            id: 2,
            title: 'Преимущества возобновляемой энергии',
            description: 'Почему солнечная и ветровая энергия становятся приоритетом.',
            date: '25 ноября 2024',
            image: 'https://mshp.rkomi.ru/uploads/images/485264jpg_1601466489.jpeg',
        },
        {
            id: 3,
            title: 'Будущее квантовых компьютеров',
            description: 'Квантовые вычисления и их влияние на технологии.',
            date: '24 ноября 2024',
            image: 'https://mshp.rkomi.ru/uploads/images/485264jpg_1601466489.jpeg',
        }, {
            id: 4,
            title: 'Искусственный интеллект на службе медицины',
            description: 'Как AI помогает диагностировать заболевания и улучшать здоровье.',
            date: '26 ноября 2024',
            image: 'https://mshp.rkomi.ru/uploads/images/485264jpg_1601466489.jpeg',
        },
        {
            id: 5,
            title: 'Преимущества возобновляемой энергии',
            description: 'Почему солнечная и ветровая энергия становятся приоритетом.',
            date: '25 ноября 2024',
            image: 'https://mshp.rkomi.ru/uploads/images/485264jpg_1601466489.jpeg',
        },
        {
            id: 6,
            title: 'Будущее квантовых компьютеров',
            description: 'Квантовые вычисления и их влияние на технологии.',
            date: '24 ноября 2024',
            image: 'https://mshp.rkomi.ru/uploads/images/485264jpg_1601466489.jpeg',
        },
        {
            id: 7,
            title: 'Искусственный интеллект на службе медицины',
            description: 'Как AI помогает диагностировать заболевания и улучшать здоровье.',
            date: '26 ноября 2024',
            image: 'https://mshp.rkomi.ru/uploads/images/485264jpg_1601466489.jpeg',
        },
        {
            id: 8,
            title: 'Преимущества возобновляемой энергии',
            description: 'Почему солнечная и ветровая энергия становятся приоритетом.',
            date: '25 ноября 2024',
            image: 'https://mshp.rkomi.ru/uploads/images/485264jpg_1601466489.jpeg',
        },
        {
            id: 9,
            title: 'Будущее квантовых компьютеров',
            description: 'Квантовые вычисления и их влияние на технологии.',
            date: '24 ноября 2024',
            image: 'https://mshp.rkomi.ru/uploads/images/485264jpg_1601466489.jpeg',
        },
    ];

    return (
        <div className="news-list">
            {news.map((item) => (
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
                            {item.title}
                        </Text>
                        <Text size="m" view="secondary" className="news-description">
                            {item.description}
                        </Text>
                        <Text size="s" view="ghost" className="news-date">
                            {item.date}
                        </Text>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default CardNews;
