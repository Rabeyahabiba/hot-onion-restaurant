import React from 'react';
import './Footer.css'
import WhiteLogo from '../../Images/logo.png';
const Footer = () => {
    return (
        <footer className="bg-dark py-3">
        <div className="col-md-6 mb-5">
                        <img src={WhiteLogo} alt="Hot Onion White Logo"/>
                    </div>
        <div className="footer-bottom d-flex justify-content-between align-items-center">
        <small className="text-secondary">Copyright &copy;  2020 Online Food </small>
        <ul className="list-inline">
            <li className="list-inline-item ml-3"><a href="">Privacy Policy.</a></li>
            <li className="list-inline-item  ml-3"><a href="">Terms of Use</a></li>
            <li className="list-inline-item  ml-3"><a href="">Pricing</a></li>
        </ul>

    </div>
    </footer>
    );
};

export default Footer;