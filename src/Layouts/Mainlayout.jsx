import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import PhoneCard from '../Component/PhoneCard';
import PhonesContainer from '../Component/PhonesContainer';

const Mainlayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className=' min-h-[calc(110vh-116px)]'>
                <div className='max-w-screen-2xl mx-auto md:px-12 lg:px-16 xl:px-24'>
                    <Outlet></Outlet>
                </div>

                <div className='text-center space-y-4'>
                    <h1 className='font-thin text-7xl text-gray-700'>Browse,Search,View,Buy</h1>
                    <p>Best place to browse,search,view details and purchase of
                        top Flagship Phones of the current time-FlagshipFaceOff
                    </p>
                   
                    <PhonesContainer></PhonesContainer>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};
export default Mainlayout;