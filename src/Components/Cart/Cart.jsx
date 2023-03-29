import React from 'react';

const Cart = ({cart}) => {
    //const cart = props.cart; option -1;
    // const {cart} = props; option-2;
    //console.log(cart);

    let totalPrice =0;
   
    for(const product of cart){
         totalPrice = totalPrice + product.price;
        
    }

    const tax = totalPrice*3/100;
    const shipping = totalPrice*2/100;

    const grandtotalPrice = totalPrice + tax + shipping; 

    return (
        <div className='pl-4 pb-6 pt-6 pr-2 bg-pink-400 mr-8 text-black rounded-b-lg sticky top-0 hover:bg-slate-300'>
            <h1 className='text-2xl font-bold'>Order Summary</h1>
            <br/>
            <div>
                <h1>TotalPrice Items: {cart.length} </h1>
                <p>TotalPrice Price: $ {totalPrice.toFixed(2)} </p>
                <p>Tax(3%): $ {tax.toFixed(2)}</p>
                <p>Shipping: $ {shipping.toFixed(2)}</p>
                <h1 className='text-md font-bold'>Grand total: $ {grandtotalPrice.toFixed(2)}</h1>
            </div>
        </div>
    );
};

export default Cart;