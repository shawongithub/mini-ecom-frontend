import React from 'react';
import { useState } from 'react';
const ReviewCart = () => {
    const cart = JSON.parse(window.localStorage.getItem('cart-key'))
    const [reviewCart, setReviewCart] = useState(cart)
    console.log(reviewCart)
    const handleRemove = (id) => {
        const newReviewCart = reviewCart.filter(product => product.id !== id)
        setReviewCart(newReviewCart)
        window.localStorage.removeItem('cart-key')
        window.localStorage.setItem('cart-key', JSON.stringify(newReviewCart))
    }
    return (
        <div>
            <h1>Review cart items</h1>
            {
                reviewCart.map(product => <div>
                    <h4>{product.name}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleRemove(product.id)}>Remove</button>

                </div>)
            }
        </div>
    );
};

export default ReviewCart;