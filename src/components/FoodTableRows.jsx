import axios from 'axios';
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';

const FoodTableRows = ({ food }) => {
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)


    const [formData, setFormData] = useState({
        name: food.name,
        image: food.image,
        price: food.price,
        cuisine: food.cuisine,
        category: food.category,
        quantity: food.quantity,
        description: food.description,
        longDescription: food.longDescription,
        purchaseCount: food.purchaseCount,
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleUpdate = e => {
        e.preventDefault()
        const preparedData = {
            ...formData,
            price: parseFloat(formData.price),
            quantity: parseInt(formData.quantity),
            purchaseCount: parseInt(formData.purchaseCount)
        }
        setLoading(true)
        axios.put(`https://asian-server-mu.vercel.app/foods/${food._id}`, preparedData)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Food details updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .finally(() => {
                setLoading(false);
                setEditModalOpen(false)
                setTimeout(() => {

                    window.location.reload();
                }, 1500);
            });
    }
    return (
        <>

            <tr key={food._id} className="hover:bg-orange-50 transition">
                <td className="py-3 px-3">
                    <img
                        src={food.image}
                        alt={food.name}
                        className="w-12 h-12 rounded-md object-cover border"
                    />
                </td>
                <td className="py-3 px-3 font-medium">{food.name}</td>
                <td className="py-3 px-3">{food.quantity}</td>
                <td className="py-3 px-3">
                    {food.quantity === 0 ?
                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
                            Not Available
                        </span>
                        : <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                            Available
                        </span>}
                </td>
                <td className="py-3 px-3">
                    <button
                        title="Edit"
                        onClick={() => setEditModalOpen(true)}
                        className="text-[#DB7137] hover:text-orange-700 transition"
                    >
                        <FaEdit size={18} />
                    </button>
                </td>
            </tr>

            {/* edit food modal */}

            {editModalOpen && (
                <div className="fixed inset-0 bg-[#00000094] bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
                        <button
                            onClick={() => setEditModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold mb-6">Edit Food Details</h2>
                        <form onSubmit={handleUpdate} className="space-y-8">
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
                                {loading? 'Updating...' : 'Update'} 
                            </button>
                        </form>

                    </div>
                </div>
            )}
        </>
    );
};

export default FoodTableRows;