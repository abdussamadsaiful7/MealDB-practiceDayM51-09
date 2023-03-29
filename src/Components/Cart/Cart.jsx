import React from 'react';

const Cart = () => {
    return (
        <div className='pl-4 pb-6 pt-6 pr-2 bg-pink-400 mr-8 text-black rounded-b-lg hover:bg-slate-300'>
            <h1 className='text-2xl font-bold'>Order Summary</h1>
            <br/>
            <div>
                <h1>Total Items:</h1>
                <p>Total Price: $</p>
                <p>Total Tax: $</p>
                <h1 className='text-lg font-bold'>Grand Total: $</h1>
            </div>
        </div>
    );
};

export default Cart;