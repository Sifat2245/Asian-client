import React from 'react';
import footerImg from '../assets/100396274-sushi-roll-set-top-view-banner-for-site-designe.jpg';
import fb from '../assets/social icons/facebook.png';
import wp from '../assets/social icons/whatsapp.png';
import insta from '../assets/social icons/insta.png';
import youtube from '../assets/social icons/yoututbe.png';
import x from '../assets/social icons/x.png';
import logo from '../assets/logo-white.png'
import { NavLink } from 'react-router';

const Footer = () => {
    const Links = (
        <>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About Us</NavLink>
            <NavLink to="/menu" >Gallery</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
            <NavLink to="/shop" >Shop</NavLink>

        </>
    );

    return (
        <>
            <div
                className="relative bg-cover bg-center py-12"
                style={{ backgroundImage: `url(${footerImg})` }}
            >

                <div className="absolute inset-0 bg-[#2e2e2ec9] z-0"></div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white w-2/3 mx-auto items-center gap-y-12">
                    <div className='flex flex-col items-center'>
                        <div className="flex gap-8">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img className="w-6 h-6" src={fb} alt="Facebook" />
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                                <img className="w-6 h-6" src={x} alt="Twitter/X" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img className="w-6 h-6" src={insta} alt="Instagram" />
                            </a>
                            <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
                                <img className="w-6 h-6" src={wp} alt="WhatsApp" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <img className="w-6 h-6" src={youtube} alt="YouTube" />
                            </a>
                        </div>

                        <div className='mt-10'>
                            <p className='tracking-widest font-light'>STAY TUNED</p>
                        </div>
                        <div className='text-center mt-8 font-light'>
                            <p>Discover fresh flavors and unforgettable <br /> moments.
                                Join our community <br /> and stay updated with special offers.  </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={logo} className='w-28' alt="" />
                        <p className='font-light mt-8'>info@asian.com</p>
                        <p className='font-light mt-1'>+12 345 678 384</p>
                    </div>
                    <div>
                        <div className='flex flex-col text-center font-light gap-3'>
                            {Links}

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white text-black text-lg text-center py-3 font-light">
                <p>Copyright {new Date().getFullYear()} Asian Restaurant</p>
            </div>

        </>
    );
};

export default Footer;
