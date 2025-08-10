import React from 'react';
import { Outlet } from 'react-router';

const Shuvo = () => {
    return (
        <div>
            <h1>This is Shuvo </h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Shuvo;