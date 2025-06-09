import React from 'react';
import DishCard from './DishCard';

const PopularDishes = () => {
    return (
        <>
            <div className='my-24 px-8'>
                <div className='text-center'>
                    <h1 className='text-3xl lg:text-5xl font-light'>Our Popular Dishes</h1>
                    <p className='text-sm lg:text-xl mt-3 text-[#0000005e]'>Craving something everyone loves? <br />
                        These are the top picks on our menu!</p>
                </div>
            </div>

            <div className='mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-4/5 mx-auto'>
                <DishCard></DishCard>
            </div>
        </>
    );
};

export default PopularDishes;