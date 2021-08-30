import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Shop.css'
import Product from '../Product/Product'


const Shop = () => {
    const storedCart = JSON.parse(window.localStorage.getItem('cart-key'))
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState(storedCart)
    const updatedCart = (cart === null ? [] : cart)
    console.log(cart)
    useEffect(() => {
        axios.get('https://mini-ecom-api.herokuapp.com/product/api/v1/list/create/')
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

        </div>
    );
};

export default Shop;