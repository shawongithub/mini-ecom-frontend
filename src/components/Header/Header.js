import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    const token = JSON.parse(window.localStorage.getItem('token'))

    const component = token ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>
    return (
        <div className="header">

            <div className="header__logo">
                <h4>MiniShop</h4>
            </div>
            <div className="header__menu">
                <div className="item-"> <Link to="/shop">Shop</Link></div>
                <div className="item-"> <Link to="/review">ReviewCart</Link></div>
                <div className="item-"> <Link to="/addproduct">AddProduct</Link></div>
                <div className="item-">{component}</div>
            </div>
        </div>
    );
};

export default Header;