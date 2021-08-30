import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    const token = JSON.parse(window.localStorage.getItem('token'))

    const component = token ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>
    return (
        <div className="header">

            <div className="header__logo">
                LOGO
            </div>
            <div className="header__menu">
                <div className="item-">Home</div>
                <div className="item-">ReviewCart</div>
                <div className="item-">AddProduct</div>
                <div className="item-">Login</div>
            </div>
        </div>
    );
};

export default Header;