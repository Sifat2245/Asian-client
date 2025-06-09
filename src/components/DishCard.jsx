import { FaEye, FaShoppingBag, FaHeart, FaStar } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import { motion } from "framer-motion";
import img from '../assets/shop-1.jpg';


const DishCard = () => {
    return (
        <div className="group w-80 lg:w-96 mx-auto relative rounded-md overflow-hidden border-2 border-[#f8f8f8] hover:border-[#DB7137] transition-all duration-700">
            {/* Image */}
            <div className="relative">
                <img
                    src={img}
                    alt="English Breakfast"
                    className="w-full object-contain bg-white p-6"
                />

                {/* Hover Buttons with framer-motion */}
                {/* Hover Buttons */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[
                        { icon: <FaEye />, tip: "View Details", id: "tooltip-eye" },
                        { icon: <FaShoppingBag />, tip: "Add to Cart", id: "tooltip-cart" },
                        { icon: <FaHeart />, tip: "Add to Favorites", id: "tooltip-heart" },
                    ].map(({ icon, tip, id }, idx) => (
                        <motion.button
                            key={id}
                            className="bg-[#DB7137] text-white p-3 rounded shadow hover:bg-[#272727]"
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
                    <Tooltip id="tooltip-eye" place="left" className="!bg-[#DB7137] !text-white text-sm px-3 py-1 rounded" />
                    <Tooltip id="tooltip-cart" place="left" className="!bg-[#DB7137] !text-white text-sm px-3 py-1 rounded" />
                    <Tooltip id="tooltip-heart" place="left" className="!bg-[#DB7137] !text-white text-sm px-3 py-1 rounded" />
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

                <h3 className="text-xl font-semibold mt-3">English Breakfast</h3>

                {/* Decorative line with hover animation */}
                <div className="flex items-center justify-center gap-2 my-4">
                    <div className="h-[2px] bg-[#0000001c] w-24 group-hover:w-34 group-hover:bg-[#DB7137] transition-all duration-700" />
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#DB7137] rotate-45" />
                    </div>
                    <div className="h-[2px] bg-[#0000001c] w-24 group-hover:w-34 group-hover:bg-[#DB7137] transition-all duration-700" />
                </div>


                <p className="text-xl text-gray-700">$350.00</p>
            </div>
        </div>
    );
};

export default DishCard;
