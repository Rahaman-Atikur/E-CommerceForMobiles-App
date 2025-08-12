import React from 'react';
import Hero from '../Component/Hero';
import PhonesContainer from '../Component/PhonesContainer';
import { useLoaderData } from 'react-router';
const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Hero></Hero>
            <PhonesContainer Phones={data}></PhonesContainer>
        </div>
    );
};

export default Home;