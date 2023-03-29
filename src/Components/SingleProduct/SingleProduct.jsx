import React from 'react';

const SingleProduct = (props) => {
    const { image, category, title, price, rating} = props.product;
    console.log(props.product)
    return (
        <div className="card  bg-pink-400 shadow-xl">
            <figure><img className='w-64 h-64 m-4 rounded-lg' src={image} alt="Shoes" /></figure>
            <div className="card-body text-black">
                <h2 className="card-title">{category}</h2>
                <p>Price: ${price}</p>
                <p>Title: {title}</p>
                <p>Rating: {rating.rate} Stars,  Count: {rating.count}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary w-full block text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;