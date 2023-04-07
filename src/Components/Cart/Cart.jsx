import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart)

    let totalPrice =0;
    let totalShipping = 0;
    let quantity = 0;

    for(const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity
        quantity = quantity + product.quantity
    }

    const tax = totalPrice*7/100

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div>
            <h4>order summary</h4>
            <p>Select Items: {quantity}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tex: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;