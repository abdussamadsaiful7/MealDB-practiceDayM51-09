import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <SingleProduct product={product}></SingleProduct>)
                }
            </div>
            <div className='cart-container'>
                <h1>Order Summary</h1>
            </div>
        </div>
    );
};

export default Products;