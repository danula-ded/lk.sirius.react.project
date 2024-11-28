import React from "react";
import "./MainPage.css";
import CardNews from "../../components/card_new/CardNews";

const MainPage = () => {
    return (
        <div>
            <h1 className="main-page-title">MainPage</h1>
            <CardNews />
        </div>
    );
};

export default MainPage;