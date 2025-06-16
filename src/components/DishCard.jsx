import { FaEye, FaShoppingBag, FaHeart, FaStar } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";
import { use, useState } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { CgNotes } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";



const DishCard = ({ food }) => {
    const { _id, image, name, price, description, purchaseCount, cuisine, category, quantity, addedBy } = food

    const [quickViewModalOpen, setQuickViewModalOpen] = useState(false)

    const [qntity, setQntity] = useState(1)
    const [maxMessage, setMaxMessage] = useState('')
    const { user } = use(authContext)

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
        <>

            <div className="group w-64 lg:w-80 mx-auto relative rounded-md overflow-hidden border-2 border-[#f3f3f3] hover:border-[#DB7137] transition-all duration-700">
                {/* Image */}
                <div className="relative">
                    <img
                        src={image}
                        alt="English Breakfast"
                        className="w-full object-contain bg-white"
                    />


                    {/* Hover Buttons */}
                    <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {[
                            { icon: <FaEye />, tip: "Quick View", id: "tooltip-eye", onClick:() => setQuickViewModalOpen(true) },
                            { icon: <FaShoppingBag />, tip: "Add to Cart", id: "tooltip-cart" },
                            { icon: <FaHeart />, tip: "Add to Favorites", id: "tooltip-heart" },
                        ].map(({ icon, tip, id, onClick }, idx) => (
                            <motion.button
                                key={id}
                                className="bg-[#DB7137] text-white p-3 rounded shadow hover:bg-[#272727]"
                                onClick={onClick}
                                data-tooltip-id={id}
                                data-tooltip-content={tip}
                                initial={{ opacity: 0, x: 40 }}
                                whileHover="visible"
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                            >
                                {icon}
                            </motion.button>
                        ))}
                        <Tooltip id="tooltip-eye" place="left" className="!text-white text-sm px-3 py-1 rounded" />
                        <Tooltip id="tooltip-cart" place="left" className="!text-white text-sm px-3 py-1 rounded" />
                        <Tooltip id="tooltip-heart" place="left" className="!text-white text-sm px-3 py-1 rounded" />
                    </div>
                </div>

                {/* Details */}
                <div className="bg-[#0000000e] px-6 pb-8 text-center p-6">
                    {/* Rating */}
                    <div className="flex items-center justify-center gap-1 text-yellow-500 text-base">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                        <span className="text-gray-500 text-sm ml-2">1 review</span>
                    </div>

                    <Link to={`/foodDetails/${_id}`}>
                        <h3 className="text-xl font-semibold mt-3 hover:text-[#DB7137]">{name}</h3>
                    </Link>


                    {/* Decorative line with hover animation */}
                    <div className="flex items-center justify-center gap-2 my-4">
                        <div className="h-[2px] bg-[#0000001c] w-24 group-hover:w-34 group-hover:bg-[#DB7137] transition-all duration-700" />
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#DB7137] rotate-45" />
                        </div>
                        <div className="h-[2px] bg-[#0000001c] w-24 group-hover:w-34 group-hover:bg-[#DB7137] transition-all duration-700" />
                    </div>


                    <p className="text-xl text-gray-700">${price}</p>
                </div>
            </div>

            {/* quick view modal */}

            <AnimatePresence>
                {quickViewModalOpen && (
                    <motion.div
                        className="fixed transition-all duration-500 inset-0 bg-[#00000070] bg-opacity-75 flex justify-center items-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-2xl p-8 md:p-10 w-full max-w-4xl max-h-[95vh] overflow-y-auto shadow-2xl relative"
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setQuickViewModalOpen(false)}
                                className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 text-3xl transition-colors duration-300"
                            >
                                ✕
                            </button>

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
                                    <p className="text-gray-700">{description}</p>

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

                            <Link to={`/foodDetails/${_id}`}>
                                <div className="flex gap-2 items-center hover:text-orange-500 transition-all duration-400 hover:cursor-pointer mt-6">
                                    <p>View Full Details</p>
                                    <FaArrowRightLong />

                                </div>
                            </Link>


                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
};

export default DishCard;
