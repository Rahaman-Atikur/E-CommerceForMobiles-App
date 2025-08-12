import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

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
                    <form className='fex flex-col md:flex-row justify-center items-center mb-4 md:px-24'>
                        <input type="text" placeholder=' Search By Name'
                            className='bg-white border border-gray-300 rounded shadow-md w-2/3
                            h-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0' />
                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Button
                        </button>

                    </form>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};
export default Mainlayout;