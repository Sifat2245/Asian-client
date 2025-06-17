import React from 'react';
import image1 from '../assets/types/icon-11.png';
import image2 from '../assets/types/icon-12.png';
import image3 from '../assets/types/icon-13.png';
import image4 from '../assets/types/icon-14.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Countup = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3, 
    });

    return (
        <div className='py-32 dark:bg-[#2e2e2e] dark:text-[#D8D8D8] transition-all duration-300' ref={ref}>
            <div className='grid grid-cols-2 md:grid-cols-4 justify-between lg:w-4/5 mx-auto'>
                {[
                    { img: image1, label: "Meals To Go", count: 580 },
                    { img: image2, label: "Menu Type", count: 200 },
                    { img: image3, label: "Different Origin", count: 50 },
                    { img: image4, label: "Pasta & Noodles", count: 850 },
                ].map((item, index) => (
                    <div key={index} className='text-center flex flex-col items-center space-y-6'>
                        <img src={item.img} alt={item.label} />
                        <h1 className='text-2xl'>{item.label}</h1>
                        <h1 className='text-3xl text-orange-500 font-semibold'>
                            {inView && <CountUp end={item.count} duration={3} />}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countup;
