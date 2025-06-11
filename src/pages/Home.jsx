import React from 'react';
import Hero from '../components/Hero';
import PopularDishes from '../components/PopularDishes';
import NewsLetter from '../components/NewsLetter';
import PoweredBy from '../components/PoweredBy';
import Gallery from '../components/Gallery';

const FoodPromise = fetch('https://asian-server-mu.vercel.app/top-purchase').then(res => res.json())

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularDishes FoodPromise={FoodPromise}></PopularDishes>
            <Gallery></Gallery>
            <NewsLetter></NewsLetter>
            <PoweredBy></PoweredBy>
        </div>
    );
};

export default Home;