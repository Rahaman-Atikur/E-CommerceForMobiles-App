import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Mainlayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className=' min-h-[calc(110vh-116px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};
export default Mainlayout;