import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/Sidebar';
import Trends from '../pages/Trends';

function Layout({children}) {
    return (
        <>
            <Sidebar/>
            <Outlet/>
            <Trends />
        </>
    );
}

export default Layout;