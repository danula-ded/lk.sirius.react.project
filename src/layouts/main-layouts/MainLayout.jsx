import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <hr />
            <main style={{ minHeight: "75dvh" }}>
                <Outlet />
            </main>
            <Footer></Footer>
        </div >
    );
};

export default MainLayout;
