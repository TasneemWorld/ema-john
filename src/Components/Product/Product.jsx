import React, { useState } from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Test from '../Test/Test';

// test state



const Product = (props) => {
    // console.log(props)
    const { img, name, seller, ratings, quantity, price } = props.product;
    const handlerAddToCart = props.handlerAddToCart;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} starts</p>
            </div>
            <button onClick={() => handlerAddToCart(props.product)} className='cart-btn'>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;