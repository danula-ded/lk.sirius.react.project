import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <hr />
            <main>
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
