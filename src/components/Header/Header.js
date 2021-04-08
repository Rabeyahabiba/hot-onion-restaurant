import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo2.png';
const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white py-2 fixed-top">
            <div className="container">
            <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="Hot Onion Logo"/>
                </Link>
            </div>
        </nav>
    );
};

export default Header;