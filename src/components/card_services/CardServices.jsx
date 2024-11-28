import React from "react";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import "./CardServices.css"; // Для стилей (по желанию)



const CardServices = () => {
    const services = [
        {
            id: 1,
            title: 'Разработка сайтов',
            description: 'Создание удобных и современных веб-приложений.',
            image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        },
        {
            id: 2,
            title: 'Анализ данных',
            description: 'Обработка и визуализация данных для бизнеса.',
            image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        },
        {
            id: 3,
            title: 'Техническая поддержка',
            description: 'Помощь и сопровождение IT-проектов.',
            image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        },
        {
            id: 4,
            title: 'Дизайн интерфейсов',
            description: 'Проектирование удобных и красивых UI/UX.',
            image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        },
        {
            id: 5,
            title: 'Обучение',
            description: 'Тренинги и воркшопы по современным технологиям.',
            image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        },
        {
            id: 6,
            title: 'Консалтинг',
            description: 'Решение сложных задач с помощью наших экспертов.',
            image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        },
        {
            id: 7,
            title: 'Оптимизация процессов',
            description: 'Улучшение и автоматизация бизнес-процессов.',
            image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        },
        {
            id: 8,
            title: 'Криптография',
            description: 'Защита данных и предотвращение угроз.',
            image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        },
        {
            id: 9,
            title: 'Мобильная разработка',
            description: 'Создание нативных и кроссплатформенных приложений.',
            image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        },
        {
            id: 10,
            title: 'Машинное обучение',
            description: 'Реализация моделей и алгоритмов AI.',
            image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        },
    ];



    return (
        <div className="card-list">
            {services.map((item) => (
                <Card
                    key={item.id}
                    verticalSpace="l"
                    horizontalSpace="l"
                    shadow
                    className="card-item"
                >
                    <img src={item.image} alt={item.title} className="card-image" />
                    <div className="card-content">
                        <Text size="l" weight="bold" className="card-title">
                            {item.title}
                        </Text>
                        <Text size="s" view="secondary" className="card-description">
                            {item.description}
                        </Text>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default CardServices;
