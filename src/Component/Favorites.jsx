import React from 'react';
import { Outlet } from 'react-router';

const Favorites = () => {
    return (
        <div>
            <h3>My Favorites Pages and Something</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Favorites;