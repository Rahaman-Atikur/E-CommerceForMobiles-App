import React from 'react';
import PhoneCard from './PhoneCard';

const PhonesContainer = ({Phones}) => {
    console.log(Phones);
    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                <button>Show All</button>
                <PhoneCard></PhoneCard>
            </div>
           
        </div>
    );
};

export default PhonesContainer;