import React from 'react';
import footerImg from '../assets/100396274-sushi-roll-set-top-view-banner-for-site-designe.jpg';

import fb from '../assets/social icons/facebook.png';
import wp from '../assets/social icons/whatsapp.png';
import insta from '../assets/social icons/insta.png';
import youtube from '../assets/social icons/yoututbe.png';
import x from '../assets/social icons/x.png';

import visa from '../assets/payments/visa.jpg';
import mastercard from '../assets/payments/mastercard.png';
import bkash from '../assets/payments/bkash.png';
import nagad from '../assets/payments/nagad.jpg';

import logo from '../assets/logo-white.png';
import { NavLink } from 'react-router';

const Footer = () => {
    const Links = (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/menu">Gallery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/shop">Shop</NavLink>
        </>
    );

    return (
        <>
            <div
                className="relative bg-cover bg-center py-28 w-full px-4 "
                style={{ backgroundImage: `url(${footerImg})` }}
            >
                <div className="absolute inset-0 bg-[#2e2e2ec9] z-0"></div>

                <div className=" relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white max-w-6xl mx-auto items-center gap-y-12">
                    
                    {/* Social + Message */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex gap-6">
                            <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img className="w-6 h-6" src={fb} alt="Facebook" />
                            </a>
                            <a aria-label="X (Twitter)" href="https://x.com" target="_blank" rel="noopener noreferrer">
                                <img className="w-6 h-6" src={x} alt="X" />
                            </a>
                            <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img className="w-6 h-6" src={insta} alt="Instagram" />
                            </a>
                            <a aria-label="WhatsApp" href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
                                <img className="w-6 h-6" src={wp} alt="WhatsApp" />
                            </a>
                            <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <img className="w-6 h-6" src={youtube} alt="YouTube" />
                            </a>
                        </div>

                        <p className="tracking-widest font-light mt-10 uppercase">Stay Tuned</p>
                        <p className="text-center mt-8 font-light">
                            Discover your fresh flavors and unforgettable <br />
                            moments. Join our community <br />
                            and stay updated with special offers.
                        </p>
                    </div>

                    {/* Logo + Contact + Payment */}
                    <div className="flex flex-col items-center text-center">
                        <img src={logo} className="w-28" alt="Asian Restaurant Logo" />
                        <a href="mailto:info@asian.com" className="font-light mt-8">info@asian.com</a>
                        <p className="font-light mt-1">+12 345 678 384</p>
                        <div className="mt-6 flex gap-4 justify-center">
                            <img src={visa} alt="Visa" className="w-8 " />
                            <img src={mastercard} alt="MasterCard" className="w-8" />
                            <img src={bkash} alt="bKash" className="w-8 " />
                            <img src={nagad} alt="Nagad" className="w-8 " />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="text-center">
                        <h4 className="uppercase font-semibold mb-4">Quick Links</h4>
                        <div className="flex flex-col font-light gap-3">
                            {Links}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white text-black text-lg text-center py-3 font-light dark:bg-[#2e2e2e] dark:text-[#D8D8D8] transition-all duration-300">
                <p>Copyright © {new Date().getFullYear()} Asian Restaurant</p>
            </div>
        </>
    );
};

export default Footer;
