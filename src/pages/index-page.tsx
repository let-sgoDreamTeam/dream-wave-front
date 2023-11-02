import React from 'react';
import {Outlet} from "react-router-dom";
import Navigation from "../components/navigation/navigation";

const IndexPage = () => {
    return (
        <main>
            <Outlet />
            <Navigation />
        </main>
    );
};

export default IndexPage;
