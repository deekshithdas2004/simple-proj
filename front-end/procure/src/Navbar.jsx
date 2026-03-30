import React from 'react'
import './App.css';
import { NavLink } from 'react-router-dom';
import UserInfo from './UserInfo';

function Navbar() {
    return (
        <div className='navbarWrapper'>
            <div className='logosection'>
                <img src="https://s.tmimgcdn.com/scr/800x500/295300/modern-professional-business-logo-template_295305-original.jpg" 
                alt="logo"  width={60} height={60} style={{borderRadius:"10px"}}/>
                </div>
            <div className='navMenu'>
                <NavLink to={'/'} className='navLink'>
            Home
            </NavLink>
            <NavLink to={'/about-us'} className='navLink'>
            About us
            </NavLink>
            <NavLink to={'/contact-us'}className='navLink'>
            Contact us
            </NavLink>
            </div>
            <UserInfo/>
        </div>
    )
}

export default Navbar;

