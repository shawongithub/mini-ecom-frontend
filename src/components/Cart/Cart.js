import React from 'react';
import { Link } from 'react-router-dom'
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, product) => total + product.price, 0)
    window.localStorage.setItem('cart-key', JSON.stringify(cart))
    return (
        <div>
            <h4 style={{ color: 'blue' }} >Cart</h4>
            <h5>No of items: {cart.length}</h5>
            <br />
            {
                cart.map(product => <div>
                    <h5>{product.name}</h5>
                    <h6>Price : {product.price}</h6>
                </div>)
            }
            <br />
            <h5>Total cost:{total}</h5>
            <Link to='/review'><button className="review-button">Review Cart</button></Link>

        </div>
    );
};

export default Cart;