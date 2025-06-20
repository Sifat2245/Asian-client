import React, { useContext, useState } from 'react';
import bgImg from '../assets/bg.jpg'
import { Link, useLoaderData } from 'react-router';
import { FaStar } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { CgNotes } from 'react-icons/cg';
import PageTitle from '../hooks/PageTitle';
import { authContext } from '../authProvider/AuthProvider';
import ReviewSection from '../components/ReviewSection';



const FoodDetails = () => {

    const { _id, image, name, description, price, cuisine, category, quantity, purchaseCount, longDescription, addedBy } = useLoaderData()
    // const availableQuantity = quantity
    // console.log(_id);

    const [qntity, setQntity] = useState(1)
    const [maxMessage, setMaxMessage] = useState('')
    const { user } = useContext(authContext)

    const isOwner = user?.email === addedBy


    const handleDecrease = () => {
        if (qntity > 1) {
            setQntity(prev => prev - 1)
            setMaxMessage('')
        }
    }

    const handleIncrease = () => {
        if (qntity < quantity) {
            setQntity(prev => prev + 1)
            setMaxMessage('')
        }
        else {
            setMaxMessage('Max limit reached.')
        }
    }

    const foodData = {
        _id,
        image,
        name,
        price,
        cuisine,
        qntity,
    }




    return (
        <div className='dark:bg-[#2e2e2e] dark:text-[#D8D8D8] transition-all duration-300'>
            <PageTitle title={`${name} - Asian`}></PageTitle>
            <div
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className="dark:bg-[#3E3E3E] dark:text-[#D8D8D8] transition-all duration-300 relative bg-fixed text-white min-h-[35vh] bg-[#1b1b1b98] bg-blend-overlay flex flex-col items-center justify-start overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>

                <div className="relative z-10 w-full ">
                    <div className="mt-60 text-center">
                        <h1 className="text-3xl lg:text-7xl font-thin">PRODUCT</h1>
                    </div>
                </div>
            </div>

            <div className="py-24 max-w-5xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div className="space-y-6 w-full lg:w-1/2">
                        <h1 className="text-3xl sm:text-4xl font-semibold">{name}</h1>
                        <p className="text-gray-700 dark:text-[#D8D8D8]">{description}</p>

                        {/* Rating */}
                        <div className="flex items-center gap-1 text-yellow-500 text-base">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                            <span className="text-gray-500 text-sm ml-2">1 review</span>
                        </div>

                        {/* Info */}
                        <p className="text-xl"><strong>Price:</strong> ${price}</p>
                        <p className="text-xl"><strong>Cuisine:</strong> {cuisine}</p>
                        <p className="text-xl"><strong>Category:</strong> {category}</p>
                        <p className="text-xl"><strong>Total Purchase:</strong> {purchaseCount}</p>
                        <p className='text-xl'><strong>Available:</strong> {quantity} items</p>

                        {/* Quantity Selector */}
                        <div className="flex items-center space-x-4 mt-6">
                            <p className="text-lg font-medium">Quantity:</p>
                            <div className="flex items-center border rounded overflow-hidden">
                                <button
                                    onClick={handleDecrease}
                                    disabled={qntity <= 1}
                                    className="px-4 py-2 border-r hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    −
                                </button>
                                <span className="w-12 h-10 flex items-center justify-center text-lg font-semibold">
                                    {qntity}
                                </span>
                                <button
                                    onClick={handleIncrease}

                                    className="px-4 py-2 border-l hover:bg-gray-200"
                                >
                                    +
                                </button>

                            </div>

                            {maxMessage && (
                                <p className="text-red-600 text-sm mt-2">{maxMessage}</p>
                            )}
                        </div>
                        <div className='flex gap-3'>
                            <button className='bg-[#DB7137] hover:bg-[#272727] transition-all duration-300 hover:cursor-pointer border-0 text-white px-4 py-2 lg:px-4 lg:py-2 tracking-widest rounded-sm'>Add To Cart</button>
                            <button className='bg-[#DB7137] hover:bg-[#272727] transition-all duration-300 hover:cursor-pointer border-0 text-white px-4 py-2 lg:px-4 lg:py-2 tracking-widest rounded-sm'>Add To Wishlist</button>
                        </div>
                        <Link
                            to={'/checkout'}
                            state={foodData}>
                            <button
                                className={`w-2/3 tracking-widest rounded-sm transition-all duration-300 border-0 text-white px-4 py-2 lg:px-4 lg:py-2 
                                    ${quantity === 0 || isOwner
                                        ? 'bg-[#f7a274] hover:cursor-not-allowed'
                                        : 'bg-[#DB7137] hover:bg-[#272727] hover:cursor-pointer'}`}
                                disabled={quantity === 0 || isOwner}
                            >Order Now</button>
                        </Link>

                        <div className='my-3'>
                            {quantity === 0 && (
                                <p className='text-red-600'>Item is not available right now</p>
                            )}
                            {isOwner && (
                                <p className='text-red-600'>You can not buy your own added food</p>
                            )}
                        </div>


                        <div className='flex items-center gap-2 my-3'>
                            <TbTruckDelivery className='h-6 w-6' />
                            <p><span className='font-semibold'>Estimated delivery:</span> half an hour</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CgNotes className='h-6 w-6' />

                            <p><span className='font-semibold'>Free Shipping:</span> On orders above $79</p>
                        </div>
                    </div>
                </div>

                <div className='mt-32'>
                    <h1 className='text-2xl font-bold mb-6'>Description:</h1>
                    <p>{longDescription}</p>
                </div>


                {/* review section */}
                <div>
                    <ReviewSection foodId={_id}></ReviewSection>
                </div>

            </div>


        </div>
    );
};

export default FoodDetails;