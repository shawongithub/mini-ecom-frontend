import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, product) => total + product.price, 0)
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
        </div>
    );
};

export default Cart;