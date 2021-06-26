import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Shop.css'
import Product from '../Product/Product'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/product/api/v1/list/create/')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log(products)
    return (
        <div className="shop-container">
            <div className="product-container">
                <div className="row">
                    {
                        products.map(product => <Product product={product} key={product.id} />)
                    }
                </div>
            </div>
            <div className="cart-container">
            </div>

        </div>
    );
};

export default Shop;