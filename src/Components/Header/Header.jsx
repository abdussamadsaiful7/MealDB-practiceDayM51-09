import React from 'react';

const Header = () => {
    return (

        <div className='flex justify-between mx-16'>
            <h1>SAIFE</h1>
            <nav className='space-x-10'>
                <a href="/home">Home</a>
                <a href="/meals">Meals</a>
                <a href="/service">Service</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>

    );
};

export default Header;