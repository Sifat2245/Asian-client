import React from 'react';
import bgImg from '../assets/bg.jpg'
import Navbar from '../components/Navbar';

const FoodDetails = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className="relative bg-fixed text-white min-h-[35vh] bg-[#1b1b1b98] bg-blend-overlay flex flex-col items-center justify-start overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>

                <div className="relative z-10 w-full ">
                    <div className="mt-60 text-center">
                        <h1 className="text-3xl lg:text-7xl font-thin">PRODUCT</h1>
                    </div>
                </div>
            </div>

            <div className='my-96'>

            </div>
        </div>
    );
};

export default FoodDetails;