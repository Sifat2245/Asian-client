import React from 'react';
import Hero from '../components/Hero';
import PopularDishes from '../components/PopularDishes';
import NewsLetter from '../components/NewsLetter';
import PoweredBy from '../components/PoweredBy';
import Gallery from '../components/Gallery';
import Countup from '../components/Countup';

const FoodPromise = fetch('https://asian-server-mu.vercel.app/top-purchase').then(res => res.json())

const Home = () => {
    return (
        <div className='dark:bg-[#2e2e2e] dark:text-[#D8D8D8] transition-all duration-300'>
            <Hero></Hero>
            <PopularDishes FoodPromise={FoodPromise}></PopularDishes>
            <Gallery></Gallery>
            <Countup></Countup>
            <NewsLetter></NewsLetter>
            <PoweredBy></PoweredBy>
        </div>
    );
};

export default Home;