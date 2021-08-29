import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    const token = JSON.parse(window.localStorage.getItem('token'))

    const component = token ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>
    return (
        <div className="header">
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Review Cart</Link>
                {component}
                <Link to="/addproduct">Add Product</Link>
            </nav>
        </div>
    );
};

export default Header;