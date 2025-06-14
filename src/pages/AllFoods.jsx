import React, { useEffect, useState } from 'react';
import bgImg from '../assets/bg.jpg';
import DishCard from '../components/DishCard';
import PageTitle from '../hooks/PageTitle';
import Lottie from 'lottie-react';
import loader from '../../public/loader.json'

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://asian-server-mu.vercel.app/foods')
      .then(res => res.json())
      .then(data => {
        setFoods(data);
        setFilteredFoods(data);
        setLoading(false)
      });
  }, []);

  useEffect(() => {
    let filtered = [...foods];

    // Filter by search term
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(food =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price
    if (priceFilter === 'low') {
      filtered = filtered.filter(food => food.price < 6);
    } else if (priceFilter === 'medium') {
      filtered = filtered.filter(food => food.price >= 6 && food.price <= 10);
    } else if (priceFilter === 'high') {
      filtered = filtered.filter(food => food.price > 10);
    }

    setFilteredFoods(filtered);
  }, [searchTerm, priceFilter, foods]);

  if (loading) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <div className='w-52'>
          <Lottie animationData={loader} loop={true}></Lottie>
        </div>
      </div>
    )
  }

  return (
    <div>
      <PageTitle title={'All Foods - Asian'}></PageTitle>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        className="relative bg-fixed text-white min-h-[35vh] bg-[#1b1b1b98] bg-blend-overlay flex flex-col items-center justify-start overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>

        <div className="relative z-10 w-full">
          <div className="mt-60 text-center">
            <h1 className="text-3xl lg:text-7xl font-thin">ALL PRODUCTS</h1>
          </div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="w-3/4 mx-auto mt-10 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search foods..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full lg:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB7137]"
        />

        {/* Price Filter */}
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB7137]"
        >
          <option value="all">All Prices</option>
          <option value="low">Under $6</option>
          <option value="medium">$6 - $10</option>
          <option value="high">Above $10</option>
        </select>
      </div>

      {/* Food Grid */}
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-3/4 mx-auto">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <DishCard food={food} key={food._id}></DishCard>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600 text-lg">No foods found.</p>
        )}
      </div>
    </div>
  );
};

export default AllFoods;
