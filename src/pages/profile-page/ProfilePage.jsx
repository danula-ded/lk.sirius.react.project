import React from "react";
import "./ProfilePage.css";
import { Text } from "@consta/uikit/Text";

const ProfilePage = () => {
    return (
        <>
            <h1 className="profile-page-title">Profile</h1>
            <div className='profile'>
                <div className="profile-info">
                    <Text lineHeight="m" view="primary" className="profile-title">
                        Профиль
                    </Text>
                    <div className="profile-details">
                        <Text lineHeight="m" view="primary" className="profile-name">
                            Ступишин Даниил
                        </Text>
                        <Text lineHeight="m" view="primary" className="profile-email">
                            gemer@example.com
                        </Text>
                    </div>
                </div>
                <div className="profile-image">
                    <img src="https://s.trhaberler.com/storage/old/images/upload/burak-celik.jpg" className="card-image" />
                </div>
            </div>
        </>
    );
};

export default ProfilePage;