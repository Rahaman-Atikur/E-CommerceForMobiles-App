import React, { useState } from 'react';
import Hero from '../Component/Hero';
import PhonesContainer from '../Component/PhonesContainer';
import { useLoaderData } from 'react-router';
const Home = () => {
    const data = useLoaderData();
    const [Phones,setPhones] = useState(data);
  
    const handleSearch = (e,text)=>{
        e.preventDefault();
        const  searchedPhones = data.filter(phone=>
            phone.name.toLowerCase().includes(text.toLowerCase()) ||
            phone.brand.toLowerCase().includes(text.toLowerCase())
        );
          setPhones(searchedPhones);
    }
    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero>
            <PhonesContainer Phones={Phones}></PhonesContainer>
        </div>
    );
};
export default Home;