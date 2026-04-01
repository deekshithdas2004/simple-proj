import React from 'react'
import './App.css';
import { NavLink } from 'react-router-dom';
import UserInfo from './UserInfo';
import Cookies from "js-cookie";

function Navbar() {

    const isAuthorizedUser = Cookies.get("isUserVerified");
    console.log(isAuthorizedUser);

    return (
        <div className='navbarWrapper'>
            <div className='logosection'>
                <img src="https://s.tmimgcdn.com/scr/800x500/295300/modern-professional-business-logo-template_295305-original.jpg"
                    alt="logo" width={60} height={60} style={{ borderRadius: "10px" }} />
            </div>
            <div className='navMenu'>
                <NavLink to={'/'} className='navLink'>
                    Home
                </NavLink>
                <NavLink to={'/about-us'} className='navLink'>
                    About us
                </NavLink>
                <NavLink to={'/contact-us'} className='navLink'>
                    Contact us
                </NavLink>

                {
                    isAuthorizedUser === "authorized" ? (<></>) : (<NavLink to={'/login'} className='navLink'>
                        Login
                    </NavLink>
                    )
                }

                {
                    isAuthorizedUser === "authorized" ? (<></>) : (<NavLink to={'/signup'} className='navLink'>
                        Sign Up
                    </NavLink>
                    )
                }

            </div>
            {
                isAuthorizedUser === "authorized" ? <UserInfo /> : <></>
            }
        </div>
    )
}

export default Navbar;

