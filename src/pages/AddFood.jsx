import React, { use, useState } from 'react';
import bgImg from '../assets/para-09-1.jpg'
import { authContext } from '../authProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import PageTitle from '../hooks/PageTitle';
import { useNavigate } from 'react-router';

const AddFood = () => {

    const { user } = use(authContext)
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
    console.log(formData);

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

        axios.post('https://asian-server-mu.vercel.app/foods', preparedData)
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
                navigate('/myFoods')
            })
            .finally(() => {
                setLoading(false)
            })
            .catch(error => {
                console.log('there is a problem', error);
            })
    };

    return (
        <div>
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

            <div className="max-w-xl mx-auto my-24 p-6 bg-white rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Food</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <label htmlFor="foodName">Food Name</label>
                    <input
                        type="text"
                        id='foodName'
                        name="name"
                        placeholder="Food Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border border-gray-300 rounded"
                        required
                    />
                    <label htmlFor="foodImage">Food Image</label>
                    <input
                        type="url"
                        id='foodImage'
                        name="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border border-gray-300 rounded"
                        required
                    />
                    <label htmlFor="foodPrice">Food Price</label>
                    <input
                        type="number"
                        id='foodPrice'
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border border-gray-300 rounded"
                        required
                    />
                    <label htmlFor="cuisin">Cuisine</label>
                    <input
                        type="text"
                        id='cuisin'
                        name="cuisine"
                        placeholder="Cuisine (e.g., Italian, Bangladeshi, Chinese)"
                        value={formData.cuisine}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border border-gray-300 rounded"
                        required
                    />
                    <label htmlFor="cat">Category</label>
                    <input
                        type="text"
                        id='cat'
                        name="category"
                        placeholder="Category (e.g., Dessert, Main Course)"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border border-gray-300 rounded"
                        required
                    />
                    <label htmlFor="foodQuantity">Quantity</label>
                    <input
                        type="number"
                        id='foodQuantity'
                        name="quantity"
                        placeholder="Quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border border-gray-300 rounded"
                        required
                    />
                    <label htmlFor="Desc">Description</label>
                    <textarea
                        id='Desc'
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="3"
                        className="w-full p-2 mt-2 border border-gray-300 rounded"
                        required
                    />
                    <label htmlFor="longDescription">Detailed Content</label>
                    <textarea
                        id='longDescription'
                        name="longDescription"
                        placeholder="Write Detailed Content"
                        value={formData.longDescription}
                        onChange={handleChange}
                        rows="5"
                        className="w-full p-2 mt-2 border border-gray-300 rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-1/2 mx-auto block bg-[#DB7137] text-white py-2 rounded hover:bg-[#2c2c2c] transition"
                    >
                        {loading ? 'Adding...' : 'Add Food'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;