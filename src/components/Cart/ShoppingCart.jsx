import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './ShoppingCart.css';

const ShoppingCart = ({ itemCount = 0 }) => {
    return (
        <div className="shopping-cart">
            <FiShoppingCart className="cart-icon" />
            <span className="cart-count">{itemCount}</span>
        </div>
    );
};

export default ShoppingCart;
