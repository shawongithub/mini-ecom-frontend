import React from 'react';
import { useState } from 'react';
import './ReviewCart.css'
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
        <div className="row">
            <h3 className="text-center" style={{ color: "blue" }}>Review cart items</h3>
            {
                reviewCart.map(product => <div className="col-sm-3"
                    style={{
                        border: "1px solid grey",
                        borderRadius: "5px",
                        backgroundColor: "purple",
                        color: "white",
                        textAlign: "center",
                        margin: "5px",
                        padding: "5px"
                    }}>
                    <h4>{product.name}</h4>
                    <h5>{product.price}</h5>
                    <button className="remove-button" onClick={() => handleRemove(product.id)}>Remove</button>

                </div>)
            }
        </div>
    );
};

export default ReviewCart;