import React from 'react';
import Hero from '../Component/Hero';
import PhonesContainer from '../Component/PhonesContainer';
import { useLoaderData } from 'react-router';
const Home = () => {
    const Phones = useLoaderData();
    console.log(Phones);
    return (
        <div>
            <Hero></Hero>
            <PhonesContainer Phones={Phones}></PhonesContainer>
        </div>
    );
};

export default Home;