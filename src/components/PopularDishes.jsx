import React, { use } from 'react';
import DishCard from './DishCard';
import { Link } from 'react-router';

const PopularDishes = ({ FoodPromise }) => {
    const foods = use(FoodPromise)
    return (
        <>
            <div className='mt-24 mb-18 px-8'>
                <div className='text-center'>
                    <h1 className='text-3xl lg:text-5xl font-light'>Our Popular Dishes</h1>
                    <p className='text-sm lg:text-xl mt-3 text-[#0000005e]'>Craving something everyone loves? <br />
                        These are the top picks on our menu!</p>
                </div>
            </div>



            <div className='mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-3/4 mx-auto'>
                {
                    foods.map(food => <DishCard food={food} key={food._id}></DishCard>)
                }

            </div>
            <div className='text-center'>
                <Link to={'/allFoods'}>
                    <button className='bg-[#DB7137] hover:bg-[#272727] transition-all duration-300 hover:cursor-pointer border-0 text-white px-4 py-2 lg:px-8 lg:py-3 tracking-widest rounded-sm mb-24'>All Food</button>
                </Link>
            </div>
        </>
    );
};

export default PopularDishes;