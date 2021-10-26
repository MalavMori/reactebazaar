import React, { useState } from 'react';
import productdata from './productsdata';
import './scss/navbar.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <div className="navbar_main_div">
                    <div className="nav_logo">
                    <img src="./image/Ebazaarlogoweb.png" alt="" />
                    </div>
                    {/* <div className="nav_search_div">
                        <input type="text" placeholder="Search your product" />
                    </div> */}
                    <div className="nav_list_div">
                        <Link style={{textDecoration:"none"}} to="/"><h4>Home</h4></Link>
                        <Link style={{textDecoration:"none"}} to="/contactus"><h4>Contact us</h4></Link>
                    </div>
                </div>
            </header>
            
        </>
    )
}

export default Navbar
