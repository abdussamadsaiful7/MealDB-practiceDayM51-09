import React from 'react';

const Header = () => {
    return (

        <div className='flex justify-between mx-10 no-underline my-10 bg-slate-300 px-6 py-6
             text-black text-lg font-bold shadow-lg rounded-b-md'>
            <h1 className='font-serif text-green-700 hover:text-red-600'> <span className='text-black text-2xl'>S</span><span className='text-green-500 hover:text-red-600'>A</span>IF<span className='text-orange-500 hover:text-green-500'>E</span></h1>
            <nav className='space-x-10'>
                <a href="/home">Home</a>
                <a href="/products">Products</a>
                <a href="/service">Service</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>

    );
};

export default Header;