import React from 'react';
import bannerImage from '../assets/banner.png';
const Hero = () => {
    return (
        <div>
            <img src={bannerImage} alt="Banner Image" />
             <form className='fex flex-col md:flex-row justify-center items-center mb-4 md:px-24'>
                        <input type="text" placeholder=' Search By Name'
                            className='bg-white border border-gray-300 rounded shadow-md w-2/3
                            h-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0' />
                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Button
                        </button>
                    </form>
        </div>
    );
};
export default Hero;