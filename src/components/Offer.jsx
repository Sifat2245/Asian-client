import React, { useEffect, useState } from 'react';
import offerBg from '../assets/15.jpg';
import burgerImg from '../assets/offer/18.png';
import offerImg from '../assets/offer/19.png';
import titleBg from '../assets/offer/27.png';

const Offer = () => {
    const countdownDeadline = new Date("2025-08-25T23:59:59").getTime();

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = countdownDeadline - now;

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    return (
        <div
            className="w-full py-16 bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${offerBg})` }}
        >
            <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-24">
                {/* Left Content */}
                <div className="space-y-5 text-center md:text-left">
                    <p className="oswald-font inline-block border border-white/60 px-4 py-2 text-lg font-semibold">LIMITED OFFER</p>
                    <h1
                        style={{
                            backgroundImage: `url(${titleBg})`,
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            maskImage: 'initial',
                            maskRepeat: 'no-repeat',
                        }}
                        className="oswald-font text-4xl sm:text-5xl md:text-8xl font-extrabold tracking-wider leading-tight"
                    >
                        DELICIOUS <br /> BURGER
                    </h1>
                    <p className="oswald-font max-w-md mx-auto md:mx-0 text-gray-200">
                        It is a long established fact that a reader will be distracted lorem the readable content of a page when looking
                    </p>

                    {/* Timer */}
                    <div className="grid grid-cols-2  sm:grid-cols-4 gap-4 justify-center md:justify-start text-center mt-8">
                        {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
                            <div key={idx} className="bg-white/20 border border-white/30 space-y-2 py-5 rounded">
                                <div className="text-2xl font-bold oswald-font">
                                    {timeLeft[unit].toString().padStart(2, '0')}
                                </div>
                                <div className="text-sm uppercase font-light oswald-font">{unit}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative flex justify-center">
                    <img src={burgerImg} alt="burger" className="w-full max-w-xl mx-auto relative z-10" />
                    <img
                        src={offerImg}
                        alt="offer"
                        className="absolute -top-10 -right-5 sm:-right-10 w-40 sm:w-60 animate-pulse"
                    />
                </div>
            </div>
        </div>
    );
};

export default Offer;
