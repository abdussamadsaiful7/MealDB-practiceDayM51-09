import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import { addToDb, getShoppingCart } from '../Utilities/fakedb';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // useEffect(()=>{
    //     const storedCart = getShoppingCart();
    //    //step-1
    //    for(const id in storedCart){
    //     //step-2
    //     const addedProduct = products.find(product => product.id === id);
    //     if(addedProduct){
    //         const quantity = storedCart[id];
    //         addedProduct.quantity = quantity;
    //         savedCart.push(addedProduct)
    //     }
    //     //console.log('added cart', addedProduct)
        
    //    }
    // setCart(savedCart);
    // },[products])


    const handleAddToCart = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <SingleProduct product={product} key={product.id} handleAddToCart={handleAddToCart} ></SingleProduct>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Products;