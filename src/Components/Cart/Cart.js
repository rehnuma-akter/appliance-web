import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // console.log(cart);
    let total = 0; 
    for(const product of cart){
        total = total + product.price;

    }
    return (
        <div className='cart'>
            <h3>order summary</h3>
            <p>Selected items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Item Name:{cart.name}</p>
        </div>
    );
};

export default Cart;

