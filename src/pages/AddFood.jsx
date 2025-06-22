import React, { use, useState } from 'react';
import bgImg from '../assets/para-09-1.jpg'
import { authContext } from '../authProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import PageTitle from '../hooks/PageTitle';
import { useNavigate } from 'react-router';

const AddFood = () => {

    const { user } = use(authContext)
    const token = user.accessToken
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        image: '',
        price: '',
        cuisine: '',
        category: '',
        quantity: '',
        description: '',
        longDescription: '',
        purchaseCount: '0',
        addedBy: user.email,
    });
    // console.log(formData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Food submitted:', formData);
        setLoading(true)
        const preparedData = {
            ...formData,
            price: parseFloat(formData.price),
            quantity: parseInt(formData.quantity),
            purchaseCount: parseInt(formData.purchaseCount)
        }

        axios.post('https://asian-server-mu.vercel.app/foods', preparedData,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Food Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .finally(() => {
                setLoading(false)
                setTimeout(() => {
                    navigate('/myFoods')
                }, 1500);
            })
            .catch(error => {
                console.log('there is a problem', error);
            })
    };

    return (
         <div className='dark:bg-[#3E3E3E] dark:text-[#D8D8D8] transition-all duration-300'>
            <PageTitle title={'Add Food - Asian'}></PageTitle>
            <div
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className="relative bg-fixed text-white min-h-[35vh] bg-[#1b1b1ba9] bg-blend-overlay flex flex-col items-center justify-start overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>

                <div className="relative z-10 w-full ">
                    <div className="mt-60 text-center">
                        <h1 className="text-3xl lg:text-7xl font-thin">ADD FOOD</h1>
                    </div>
                </div>
            </div>

            <div className="dark:bg-[#3E3E3E] dark:text-[#D8D8D8] transition-all duration-300 max-w-xl lg:max-w-2xl mx-auto py-16 px-6 bg-white rounded-xl my-12">
                {/* <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Add New Food Item</h2> */}
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Food Name */}
                    <div>
                        <label htmlFor="foodName" className="block text-sm font-semibold text-gray-700 dark:text-[#D8D8D8] mb-1">Food Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id='foodName'
                            name="name"
                            placeholder="e.g., Spicy Ramen"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 200 rounded-md focus:ring-2 focus:ring-[#DB7137] focus:border-transparent dark:bg-[#2e2e2e] dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white transition duration-200"
                            required
                        />
                    </div>

                    {/* Food Image */}
                    <div>
                        <label htmlFor="foodImage" className="block text-sm font-semibold text-gray-700 dark:text-[#D8D8D8] mb-1">Food Image URL <span className="text-red-500">*</span></label>
                        <input
                            type="url"
                            id='foodImage'
                            name="image"
                            placeholder="https://example.com/food.jpg"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DB7137] focus:border-transparent dark:bg-[#2e2e2e]  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition duration-200"
                            required
                        />
                    </div>

                    {/* Price and Quantity - Two Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="foodPrice" className="block text-sm font-semibold text-gray-700 dark:text-[#D8D8D8] mb-1">Food Price <span className="text-red-500">*</span></label>
                            <input
                                type="number"
                                id='foodPrice'
                                name="price"
                                placeholder="e.g., 12.99"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DB7137] focus:border-transparent dark:bg-[#2e2e2e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition duration-200"
                                required
                               
                            />
                        </div>
                        <div>
                            <label htmlFor="foodQuantity" className="block text-sm font-semibold text-gray-700 dark:text-[#D8D8D8] mb-1">Quantity <span className="text-red-500">*</span></label>
                            <input
                                type="number"
                                id='foodQuantity'
                                name="quantity"
                                placeholder="e.g., 100"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DB7137] focus:border-transparent dark:bg-[#2e2e2e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition duration-200"
                                required
                            />
                        </div>
                    </div>

                    {/* Cuisine and Category - Two Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="cuisine" className="block text-sm font-semibold text-gray-700 dark:text-[#D8D8D8] mb-1">Cuisine <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id='cuisine'
                                name="cuisine"
                                placeholder="e.g., Italian, Bangladeshi"
                                value={formData.cuisine}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DB7137] focus:border-transparent dark:bg-[#2e2e2e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition duration-200"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-semibold text-gray-700 dark:text-[#D8D8D8] mb-1">Category <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id='category'
                                name="category"
                                placeholder="e.g., Dessert, Main Course"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DB7137] focus:border-transparent dark:bg-[#2e2e2e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition duration-200"
                                required
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 dark:text-[#D8D8D8] mb-1">Short Description <span className="text-red-500">*</span></label>
                        <textarea
                            id='description'
                            name="description"
                            placeholder="A brief overview of the food item..."
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DB7137] focus:border-transparent dark:bg-[#2e2e2e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition duration-200 resize-y"
                            required
                        />
                    </div>

                    {/* Long Description */}
                    <div>
                        <label htmlFor="longDescription" className="block text-sm font-semibold text-gray-700 dark:text-[#D8D8D8] mb-1">Detailed Content <span className="text-red-500">*</span></label>
                        <textarea
                            id='longDescription'
                            name="longDescription"
                            placeholder="Provide a detailed description including ingredients, preparation, etc."
                            value={formData.longDescription}
                            onChange={handleChange}
                            rows="5"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DB7137] focus:border-transparent dark:bg-[#2e2e2e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition duration-200 resize-y"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full md:w-1/2 mx-auto block bg-[#DB7137] text-white py-3 rounded-md hover:bg-[#2c2c2c] transition duration-300 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-[#DB7137] focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? 'Adding Food...' : 'Add Food'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;