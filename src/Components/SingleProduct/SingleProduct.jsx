import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const SingleProduct = (props) => {
    const { image, category, title, price, rating } = props.product;
    //console.log(props.product)

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className="card  bg-pink-400 shadow-xl hover:bg-orange-200 relative">
            <figure><img className='w-64 h-64 m-4 rounded-lg' src={image} alt="Shoes" /></figure>
            <div className="card-body text-black mb-8">
                <h2 className="card-title">{category}</h2>
                <p>Price: ${price}</p>
                <p>Title: {title}</p>
                <p>Rating: {rating.rate} Stars,  Count: {rating.count}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className="btn btn-secondary w-full block text-white rounded-t-none
                      absolute bottom-0 hover:bg-pink-400">Add to Cart  <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default SingleProduct;