import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/product/api/v1/list/create/')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleCart = (id) => {
        const product = products.find(product => product.id === id)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <div className="row">
                    {
                        products.map(product => <Product product={product}
                            key={product.id}
                            handleCart={handleCart}
                        />)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;