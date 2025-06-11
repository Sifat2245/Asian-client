import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import bgImg from '../assets/para-01.jpg';

const AuthLayot = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat'
                }}
                className="relative bg-fixed text-white min-h-[35vh] bg-[#1b1b1b7e] bg-blend-overlay flex flex-col items-center justify-start overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>

                <div className="relative z-10 w-full ">
                    <Navbar />
                    <div className="mt-60 text-center">
                        <h1 className="text-3xl lg:text-7xl font-thin">ACCOUNT</h1>
                    </div>
                </div>

            </div>

            <div className='my-24'>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default AuthLayot;
