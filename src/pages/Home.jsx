import React from 'react';
import Hero from '../components/Hero';
import PopularDishes from '../components/PopularDishes';
import NewsLetter from '../components/NewsLetter';
import PoweredBy from '../components/PoweredBy';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularDishes></PopularDishes>
            <NewsLetter></NewsLetter>
            <PoweredBy></PoweredBy>
        </div>
    );
};

export default Home;