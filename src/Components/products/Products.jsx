import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);
   // const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data));

    // const handleAddToCart =(product)=>{
    //     console.log(handleAddToCart);
    // }

    }, [])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <SingleProduct product={product} key={product.id} ></SingleProduct>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={products}/>
            </div>
        </div>
    );
};

export default Products;