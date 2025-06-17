import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, delay } from 'framer-motion'; // eslint-disable-line no-unused-vars

import img1 from '../assets/para-02.jpg';
import img2 from '../assets/para-03.jpg';
import img3 from '../assets/para-03 - Copy.jpg';
import { Link } from 'react-router';

const slides = [
    {
        id: 1,
        bg: img1,
        fg: img2,
        title: <>Amazing Food <br /> with Fresh Daily <br /> Products</>
    },
    {
        id: 2,
        bg: img3,
        fg: img1,
        title: <>Amazing Table with <br /> River View & lot of <br /> Menus</>
    },
];

const overlayVariants = {
    initial: { x: '-100%' },
    animate: {
        x: '100%',
        transition: { duration: 1, ease: 'easeInOut' },
    },
};

const textVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
    show: {
        clipPath: 'inset(0 0% 0 0)',
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeInOut' },
    },
};

const Hero = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden dark:bg-[#2e2e2e] dark:text-[#D8D8D8] transition-all duration-300">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[current].id}

                    className="absolute inset-0"
                >
                    {/* Background */}
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
                        style={{ backgroundImage: `url(${slides[current].bg})` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-[#1b1b1bb0]" />

                    {/* Foreground Content */}
                    <div className="absolute z-10 inset-0 text-white text-start px-4 w-11/12 mx-auto">
                        <div className="absolute top-62 lg:top-80 lg:left-3/12">
                            {/* Promotion */}
                            <div className="relative inline-block overflow-hidden mb-4 lg:mb-6">
                                <motion.p
                                    className="font-light lg:text-lg tracking-widest relative"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="show"
                                >
                                    PROMOTION
                                </motion.p>
                                <motion.div
                                    className="absolute inset-0 bg-[#DB7137] z-20"
                                    variants={overlayVariants}
                                    initial="initial"
                                    animate="animate"
                                />
                            </div>

                            {/* Heading */}
                            <div className="relative overflow-hidden mb-4 lg:mb-6">
                                <motion.h1
                                    className="text-4xl lg:text-7xl font-light"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="show"
                                >
                                    {slides[current].title}
                                </motion.h1>
                                <motion.div
                                    className="absolute inset-0 bg-[#DB7137] z-20"
                                    variants={overlayVariants}
                                    initial="initial"
                                    animate="animate"
                                />
                            </div>

                            {/* Button */}
                            <div className="relative inline-block overflow-hidden mt-12">
                                <Link to={'/allFoods'}>
                                    <motion.button
                                        className="bg-[#DB7137] hover:bg-[#272727] transition-all duration-300 hover:cursor-pointer border-0 text-white px-4 py-2 lg:px-8 lg:py-3 tracking-widest rounded-sm relative z-10"
                                        variants={textVariants}
                                        initial="hidden"
                                        animate="show"
                                    >
                                        All Food
                                    </motion.button>
                                </Link>
                                <motion.div
                                    className="absolute inset-0 bg-[#DB7137] z-20"
                                    variants={overlayVariants}
                                    initial="initial"
                                    animate="animate"
                                />
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative w-full h-fit">
                            <div className="absolute top-66 lg:top-42 -right-10 lg:right-10 w-[250px] lg:w-4xl overflow-hidden -z-10">
                                <motion.div
                                    className="absolute inset-0 bg-white z-20"
                                    variants={overlayVariants}
                                    initial="initial"
                                    animate="animate"

                                />
                                <motion.img
                                    src={slides[current].fg}
                                    className="w-full relative z-10"
                                    alt=""
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="show"
                                    transition={{ delay: 0.3 }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute left-5 right-5 top-1/2 z-20 flex justify-between items-center transform -translate-y-1/2">
                <button onClick={prevSlide} className="text-white text-4xl">❮</button>
                <button onClick={nextSlide} className="text-white text-4xl">❯</button>
            </div>
            <div className="absolute bottom-10 w-full flex justify-center items-center space-x-2 z-20">
                {slides.map((_, index) => (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        key={index}
                        className={`h-[2px] w-8 lg:w-16 rounded-full transition-all duration-300 ${current === index ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
