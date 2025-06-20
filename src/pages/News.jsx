import React from 'react';
import PageTitle from '../hooks/PageTitle';
import newsBg from '../assets/para-05.jpg';
import newsimg1 from '../assets/news/post-01-1.jpg'
import newsimg2 from '../assets/news/post-02-1.jpg'
import newsimg3 from '../assets/news/post-03-1.jpg'
import newsimg4 from '../assets/news/post-04-1.jpg'

const newsData = [
  {
    id: 1,
    title: 'Grand Reopening: Experience the New Asian Vibe!',
    description: 'Our restaurant reopens with a fresh design, innovative menu, and unforgettable dining experiences.',
    image: newsimg1,
    date: 'June 10, 2025',
    category: 'News',
  },
  {
    id: 2,
    title: 'Chef’s Special Menu Launch This Week',
    description: 'Discover seasonal Asian-inspired dishes crafted with creativity and authenticity.',
    image: newsimg2,
    date: 'June 7, 2025',
    category: 'Announcement',
  },
  {
    id: 3,
    title: 'Live Music Fridays Are Back!',
    description: 'Enjoy smooth acoustic performances every Friday night as you dine.',
    image: newsimg3,
    date: 'June 1, 2025',
    category: 'Event',
  },
  {
    id: 4,
    title: 'Fresh Ingredients, Always',
    description: 'We partner with local farms to bring the freshest produce to your plate daily.',
    image: newsimg4,
    date: 'May 28, 2025',
    category: 'Behind the Scenes',
  }
];

const News = () => {
  return (
    <div className="dark:bg-[#2e2e2e] dark:text-[#D8D8D8] transition-all duration-300">
      <PageTitle title="News - Asian" />

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${newsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
        className="relative bg-fixed text-white min-h-[35vh] bg-[#1b1b1b7e] bg-blend-overlay flex items-end justify-center pb-8"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>
        <h1 className="relative z-10 text-4xl lg:text-7xl font-thin">Our News</h1>
      </div>

      {/* News List Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-24">

        {newsData.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/2 h-72 object-cover rounded-xl shadow-lg"
            />
            <div className="w-full md:w-1/2">
              <p className="uppercase text-sm text-orange-500 font-semibold tracking-wide mb-2">{item.category}</p>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{item.date}</p>
              <p className="text-gray-700 dark:text-gray-200 mb-6">{item.description}</p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default News;
