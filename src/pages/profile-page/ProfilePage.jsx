import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import { Text } from "@consta/uikit/Text";
import { Loader } from "@consta/uikit/Loader";

const ProfilePage = () => {
    const { user, token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/auth');
        } else if (!user) {
            dispatch(fetchUser());
        }
    }, [dispatch, token, user, navigate]);

    if (!user) return <Loader size="m" className="loader" />;

    return (
        <>
            <h1 className="profile-page-title">Профиль</h1>
            <div className='profile'>
                <div className="profile-info">
                    <div className="profile-details">
                        <Text lineHeight="m" view="primary" className="profile-details_info">ФИО: {`${user.firstName} ${user.lastName} ${user.maidenName}`}</Text>
                        <Text lineHeight="m" view="primary" className="profile-details_info">Почта: {user.email}</Text>
                        <Text lineHeight="m" view="primary" className="profile-details_info">Возраст: {user.age}</Text>
                        <Text lineHeight="m" view="primary" className="profile-details_info">Пол: {user.gender}</Text>
                        <Text lineHeight="m" view="primary" className="profile-details_info">Дата рождения: {user.birthDate}</Text>
                    </div>
                </div>
                <div className="profile-image">
                    <img src={user.image} alt="User" className="profile-image_photo" />
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
