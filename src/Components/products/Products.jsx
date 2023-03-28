import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div>
            {
                products.map(product =><SingleProduct product ={product}></SingleProduct>)
            }
        </div>
    );
};

export default Products;