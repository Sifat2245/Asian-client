import React, { use } from 'react';
import DishCard from './DishCard';

const PopularDishes = ({FoodPromise}) => {
    const foods = use(FoodPromise)
    return (
        <>
            <div className='my-24 px-8'>
                <div className='text-center'>
                    <h1 className='text-3xl lg:text-5xl font-light'>Our Popular Dishes</h1>
                    <p className='text-sm lg:text-xl mt-3 text-[#0000005e]'>Craving something everyone loves? <br />
                        These are the top picks on our menu!</p>
                </div>
            </div>

           

            <div className='mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-3/4 mx-auto'>
             {
                foods.map(food => <DishCard food={food} key={food._id}></DishCard>)
            }
                
            </div>
        </>
    );
};

export default PopularDishes;