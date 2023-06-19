import React from 'react'
import './navbar.css'
import 'remixicon/fonts/remixicon.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <img src="/assets/myntra-logo.webp" alt="" />
            <div className="nav-links">
                <ul>
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                    <li>HOME & LIVING</li>
                    <li>BEAUTY</li>
                    <li>STUDIO</li>
                </ul>
            </div>
            <div className="nav-search">
                <i class="ri-search-line"></i>
                <input type="text" placeholder='Search for product, brands and more' />
            </div>
            <div className="nav-icons">
                <div className="nav-icon">
                    <i class="ri-user-line"></i>
                    <p>Profile</p>
                </div>
                <div className="nav-icon">
                    <i class="ri-heart-line"></i>
                    <p>Wishlist</p>
                </div>
                <div className="nav-icon">
                    <i class="ri-shopping-bag-3-line"></i>
                    <p>Bag</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
