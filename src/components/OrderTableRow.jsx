import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';
import { motion, AnimatePresence } from 'motion/react'; // eslint-disable-line no-unused-vars

const OrderTableRow = ({ order, onDelete }) => {

    const [relativeTime, setRelativeTime] = useState(moment(order.orderTime).fromNow())
    const [summeryModalOpen, setSummeryModalOpen] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setRelativeTime(moment(order.orderTime).fromNow())
        }, 60000);

        return clearInterval(interval)
    }, [order.orderTime])


    const handleCancelOrder = () => {
        Swal.fire({
            title: "You Want to cancel the Order?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"

        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://asian-server-mu.vercel.app/orders/${order._id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Canceled!",
                                text: "Your Order Has Been Canceled",
                                showConfirmButton: false,
                                timer: 1500
                            });

                            setSummeryModalOpen(false)
                            onDelete(order._id)
                        }
                    })
            }
        })
    }

    return (
        <>

            <tr key={order._id} className="hover:bg-orange-50 transition">
                <td className="py-3 px-3">
                    <img
                        src={order.itemImage}
                        alt={order.itemName}
                        className="w-12 h-12 rounded-md object-cover border"
                    />
                </td>
                <td className="py-3 px-3 font-medium">{order.itemName}</td>
                <td className="py-3 px-3 font-medium">${order.price}</td>
                <td className="py-3 px-3">{order.quantity}</td>
                <td className="py-3 px-3">${order.subTotalPrice}</td>

                <td className="py-3 px-3">
                    {relativeTime}

                </td>

                <td className="py-3 px-3">
                    <span className='bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full'>
                        Pending
                    </span>
                </td>

                <td className="py-3 px-3">
                    <button
                        title="Delete"
                        onClick={() => setSummeryModalOpen(true)}
                        className="text-[#DB7137] hover:text-orange-700 transition"
                    >
                        <FaEdit size={18}></FaEdit>
                    </button>
                </td>
            </tr>


            {/* edit food modal */}

            <AnimatePresence>
                {summeryModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-[#00000070] bg-opacity-75 flex justify-center items-center z-50 p-4"
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
                                onClick={() => setSummeryModalOpen(false)}
                                className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 text-3xl transition-colors duration-300"
                            >
                                ✕
                            </button>

                            {/* Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-gray-800">Order Summary</h2>
                                <p className="text-gray-500 mt-2">Thank you for your purchase!</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Left Column: Item Details */}
                                <div className="lg:col-span-1 lg:border-r lg:pr-8">
                                    <img
                                        src={order.itemImage}
                                        alt={order.itemName}
                                        className="rounded-xl w-full object-cover shadow-md mb-4"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800">{order.itemName}</h3>
                                    <p className="text-sm text-gray-500 mt-1">Ordered on: {new Date(order.orderTime).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                                    <div className="mt-6 space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Price:</span>
                                            <span className="font-medium text-gray-800">${order.price.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Quantity:</span>
                                            <span className="font-medium text-gray-800">{order.quantity}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Shipping:</span>
                                            <span className="font-medium text-gray-800">${order.shipping.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t">
                                        <div className="flex justify-between font-semibold">
                                            <span className="text-gray-600">Subtotal:</span>
                                            <span className="text-gray-800">${order.subTotalPrice.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Customer and Order Details */}
                                <div className="lg:col-span-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-sm text-gray-500">Your Email</p>
                                            <p className="font-semibold text-gray-800">{order.userEmail}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Country</p>
                                            <p className="font-semibold text-gray-800">{order.country}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">First Name</p>
                                            <p className="font-semibold text-gray-800">{order.firstName || '—'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Last Name</p>
                                            <p className="font-semibold text-gray-800">{order.lastName || '—'}</p>
                                        </div>
                                        <div className="md:col-span-2">
                                            <p className="text-sm text-gray-500">Address</p>
                                            <p className="font-semibold text-gray-800">{order.address || '—'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">City</p>
                                            <p className="font-semibold text-gray-800">{order.city || '—'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Postal Code</p>
                                            <p className="font-semibold text-gray-800">{order.postalCode || '—'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Apartment</p>
                                            <p className="font-semibold text-gray-800">{order.apartment || '—'}</p>
                                        </div>
                                    </div>

                                    {/* Total Price Section */}
                                    <div className="bg-orange-50 rounded-lg p-6 mt-8">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-gray-600 font-medium">Total Price</p>
                                                <p className="text-4xl font-bold text-orange-600">${order.totalPrice.toFixed(2)}</p>
                                            </div>
                                            <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01v.01M4 9.01V9m0 6v-1m0-1.01V12m0 2.01v.01M20 9.01V9m0 6v-1m0-1.01V12m0 2.01v.01M7 12h.01M17 12h.01M12 17.01V17m0 .01v.01m0-11.02V6m-5.99-1.01L6 5m12 0l.01-.01M6.01 19.01L6 19M18.01 19.01l-.01-.01"></path></svg>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-10 text-center flex justify-center items-center space-x-4">
                                        <button
                                            onClick={handleCancelOrder}
                                            className="bg-red-50 text-red-600 hover:bg-red-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
                                        >
                                            Cancel Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
};

export default OrderTableRow;
