import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Common-Components/Navber';
import Footewr from '../Components/Common-Components/Footewr';
import { ToastContainer } from 'react-toastify';

const Roots = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footewr></Footewr>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Roots;