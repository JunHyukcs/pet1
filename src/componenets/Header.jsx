import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <div className='headerWrap'>
            <div className="header-area">
                <div className="logo"><Link to="/"><img src={process.env.PUBLIC_URL + './img/logo.png'} alt="" /></Link></div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;