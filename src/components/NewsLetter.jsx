import React from 'react';
import bgimg from '../assets/slide2-bg.jpg';

const NewsLetter = () => {
    return (
        <div
            className="relative bg-fixed bg-center bg-cover bg-no-repeat text-white mb-24"
            style={{ backgroundImage: `url(${bgimg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-60"></div>


            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-56 text-center space-y-6">
                <h1 className="text-4xl font-bold">Subscribe to our Newsletter</h1>
                <p className="max-w-md">
                    Will be used in accordance with our Privacy Policy
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-12 md:gap-0 w-full max-w-xl">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-4 bg-white text-black focus:outline-none"
                    />
                    <button className="bg-[#DB7137] hover:bg-[#272727] text-white font-semibold px-6 py-4 transition">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
