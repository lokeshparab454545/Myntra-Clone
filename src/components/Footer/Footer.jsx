import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <section className='footer'>
            <div className="footer-col">
                <h2>ONLINE SHOPPING</h2>
                <p>Men</p>
                <p>Women</p>
                <p>Kids</p>
                <p>Home & Living</p>
                <p>Beauty</p>
            </div>
            <div className="footer-col">
                <h2>CUSTOMER POLICIES</h2>
                <p>Contact Us</p>
                <p>FAQ</p>
                <p>Privacy Policy</p>
                <p>Shipping</p>
                <p>Return Policy</p>
            </div>
            <div className="footer-col">
                <div className="footer-download">
                    <h2>EXPERIENCE MYNTRA APP</h2>
                    <div className="footer-img">
                        <img src="/assets/g-pay.png" alt="" />
                        <img src="/assets/app-store.png" alt="" />
                    </div>
                </div>
                <div className="footer-social">
                    <h2>KEEP IN TOUCH</h2>
                    <i class="ri-facebook-box-fill"></i>
                    <i class="ri-instagram-fill"></i>
                    <i class="ri-twitter-fill"></i>
                    <i class="ri-youtube-fill"></i>
                </div>

            </div>
            <div className="footer-col">
                <div className="footer-row">
                    <img src="/assets/original.png" alt="" />
                    <div className="footer-row-text">
                        <p>100% ORIGINAL guarantee </p>
                        <p> for all products at myntra.com </p>
                    </div>
                </div>
                <div className="footer-row">
                    <img src="/assets/return.png" alt="" />
                    <div className="footer-row-text">
                        <p>Return within 14days</p>
                        <p>of receiving your order </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Footer
