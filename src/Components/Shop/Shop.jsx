import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Test from '../Test/Test';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // console.log(products)

    const [cart, setCart] = useState([])

    const handlerAddToCart = (singleProduct) => {
        // console.log(singleProduct)
        let newCart = []

        const exists = cart.find(product => product.id === singleProduct.id);
        if (!exists) {
            singleProduct.quantity = 1;
            newCart = [...cart,singleProduct]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(product => product.id !== singleProduct.id)
            newCart = [...remaining,exists]
        }
        setCart(newCart)
        addToDb(singleProduct.id)
    }

    useEffect(() => {
        const storedCart = getShoppingCart()
        // console.log(storeCart)
        const savedCart = [];

        for (const id in storedCart) {
            const savedProduct = products.find(product => product.id === id)
            if (savedProduct) {
                const quantity = storedCart[id];                // why we do not use sotredCart.id
                savedProduct.quantity = quantity;
                console.log(savedProduct)
                savedCart.push(savedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handlerAddToCart={handlerAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;