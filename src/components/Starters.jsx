import React from 'react';

import starterimg1 from '../assets/Starters/sm-01.jpg'
import starterimg2 from '../assets/Starters/sm-02.jpg'
import starterimg3 from '../assets/Starters/sm-03.jpg'
import starterimg4 from '../assets/Starters/sm-04.jpg'
import starterimg5 from '../assets/Starters/sm-05.jpg'
import starterimg6 from '../assets/Starters/sm-06.jpg'
import starterimg7 from '../assets/Starters/sm-07.jpg'
import starterimg8 from '../assets/Starters/sm-08.jpg'

const startersData = [
    {
        id: 1,
        name: 'PASTA WITH FISH',
        desc: 'Freshly made pasta in a light, savory sauce with seasonal fish.',
        price: 39,
        tag: 'STARTER',
        image: starterimg1,
    },
    {
        id: 2,
        name: 'FRESH MEAT',
        desc: 'Prime cut of seared steak, seasoned with rosemary and garlic.',
        price: 26,
        tag: 'NEW',
        image: starterimg2,
    },
    {
        id: 3,
        name: 'SPAGHETTI',
        desc: 'Classic spaghetti topped with a rich, slow-simmered meat sauce.',
        price: 37,
        tag: 'NEW',
        image: starterimg3,
    },
    {
        id: 4,
        name: 'VEGETARIAN SOUP',
        desc: 'A hearty and warming soup made with fresh, seasonal vegetables.',
        price: 42,
        tag: 'VEGAN',
        image: starterimg4,
    },
    {
        id: 5,
        name: 'NOODLES',
        desc: 'Stir-fried noodles with crisp vegetables in a tangy soy-ginger glaze.',
        price: 16,
        tag: 'NEW',
        image: starterimg5,
    },
    {
        id: 6,
        name: 'CHICKEN',
        desc: 'Grilled, tender chicken breast marinated in lemon and herbs.',
        price: 19,
        tag: 'NEW',
        image: starterimg6,
    },
    {
        id: 7,
        name: 'VEGETARIAN FRIED',
        desc: 'Crispy, golden-fried vegetables served with a sweet chili dip.',
        price: 34,
        tag: 'GLUTAN FREE',
        image: starterimg7,
    },
    {
        id: 8,
        name: 'SALMON PASTA',
        desc: 'Smoked salmon and capers tossed in a delicate dill cream sauce.',
        price: 71,
        tag: 'FISH',
        image: starterimg8,
    },
];

const Tag = ({ label }) => {
    if (label === 'FISH') {
        return <span className="text-xs font-semibold text-gray-500 border border-gray-400 px-3 py-1 dark:text-[#D8D8D8]">{label}</span>;
    }

    return (
        <span className="text-xs px-3 py-1 rounded-sm font-semibold bg-orange-500 text-white">
            {label}
        </span>
    );
};


const StarterItem = ({ image, name, desc, price, tag }) => (
   
    <div className="flex items-center gap-4 py-5">
        <img src={image} alt={name} className="w-16 h-16 object-cover rounded-sm flex-shrink-0" />
        
        <div className="flex-grow ">
            <h4 className="font-semibold text-gray-800 dark:text-[#D8D8D8]">{name}</h4>
            <p className="text-gray-400 text-sm">{desc}</p>
        </div>

  
        <div className="flex-grow border-b-2 border-dotted border-gray-300 mx-4"></div>

  
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <span className="font-semibold text-lg text-gray-700 dark:text-[#D8D8D8]">${price}</span>
            <Tag label={tag} />
        </div>
    </div>
);


const Starters = () => {
    const leftItems = startersData.slice(0, 4);
    const rightItems = startersData.slice(4, 8);

    return (
        <div className="max-w-6xl mx-auto px-4 pt-28 pb-24">
            <div className="text-center mb-12 relative">
                <span className="text-8xl font-thin dark:text-neutral-600 text-gray-200/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] select-none">
                    Promotions
                </span>
                <h2 className="text-5xl font-light dark:text-[#D8D8D8] text-gray-800 relative tracking-widest">
                    Starters
                </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12">
                <div className='dark:text-[#D8D8D8]'>
                    {leftItems.map((item) => (
                        <StarterItem key={item.id} {...item} />
                    ))}
                </div>
                <div className=''>
                    {rightItems.map((item) => (
                        <StarterItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Starters;