import React from 'react';
import Hero from '../components/Hero';
import PopularDishes from '../components/PopularDishes';
import NewsLetter from '../components/NewsLetter';
import PoweredBy from '../components/PoweredBy';
import Gallery from '../components/Gallery';
import Countup from '../components/Countup';
import Starters from '../components/Starters';
import Contact from '../components/Contact';
import Offer from '../components/Offer';

const FoodPromise = fetch('https://asian-server-mu.vercel.app/top-purchase').then(res => res.json())

const Home = () => {
    return (
        <div className='dark:bg-[#2e2e2e] dark:text-[#D8D8D8] transition-all duration-300'>
            <Hero></Hero>
            <Starters></Starters>
            <Offer></Offer>
            <PopularDishes FoodPromise={FoodPromise}></PopularDishes>
            <Gallery></Gallery>
            <Countup></Countup>
            <NewsLetter></NewsLetter>
            <PoweredBy></PoweredBy>
            <Contact></Contact>
        </div>
    );
};

export default Home;