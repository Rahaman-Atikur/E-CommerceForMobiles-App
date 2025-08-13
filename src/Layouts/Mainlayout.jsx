import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import PhoneCard from '../Component/PhoneCard';
import PhonesContainer from '../Component/PhonesContainer';
import Hero from '../Component/Hero';

const Mainlayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className=' min-h-[calc(110vh-116px)]'>
                <div className='max-w-screen-2xl mx-auto md:px-12 lg:px-16 xl:px-24'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};
export default Mainlayout;