import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import './ReviewCart.css'
const ReviewCart = () => {
    const cart = JSON.parse(window.localStorage.getItem('cart-key'))
    const [reviewCart, setReviewCart] = useState(cart)
    const [token, setToken] = useState('')
    useEffect(() => {
        const newToken = JSON.parse(window.localStorage.getItem('token'))
        setToken(newToken)
    }, [])
    console.log(token)
    console.log("review-cart", reviewCart)
    const handleRemove = (id) => {
        const newReviewCart = reviewCart.filter(product => product.id !== id)
        setReviewCart(newReviewCart)
        window.localStorage.removeItem('cart-key')
        window.localStorage.setItem('cart-key', JSON.stringify(newReviewCart))
    }
    const handleSubmit = () => {
        console.log(reviewCart)
        axios.post('http://127.0.0.1:8000/product/api/v1/addtocart/',
            {
                products: reviewCart
            },
            {
                headers: {
                    'X-Jwt-Token': `Bearer ${token}`
                }
            }
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="container">
            <div className="text-center">
                <h3 style={{ color: "blue" }}>Review cart items</h3>
            </div>

            <div className="row">
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
            <div className="text-center">
                <button style={{ marginTop: "20px" }} onClick={handleSubmit}>Place Order</button>
            </div>

        </div>
    );
};

export default ReviewCart;