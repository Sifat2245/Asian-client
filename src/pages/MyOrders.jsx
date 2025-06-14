import React, { use, useEffect, useState } from 'react';
import bgImg from '../assets/para-09-1.jpg'
import PageTitle from '../hooks/PageTitle';
import { authContext } from '../authProvider/AuthProvider';
import axios from 'axios';
import OrderTableRow from '../components/OrderTableRow';
import Lottie from 'lottie-react';
import loader from '../../public/loader.json'


const MyOrders = () => {

    const [orders, setOrders] = useState([])
    const { user } = use(authContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://asian-server-mu.vercel.app/order/${user.email}`)
                .then(res => {
                    const myOrders = res.data
                    setOrders(myOrders)
                    setLoading(false)
                })
        }
    }, [user?.email])

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
            <PageTitle title={'My Orders - Asian'}></PageTitle>
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
                        <h1 className="text-3xl lg:text-7xl font-thin">My Orders</h1>
                    </div>
                </div>
            </div>

            <div>
                <div className="overflow-x-auto mt-10 px-2 md:px-6 lg:px-10 my-32">
                    {orders.length > 0 ?
                        <table className="min-w-4/5 mx-auto bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
                            <thead className="bg-[#DB7137] text-white text-sm sm:text-base">
                                <tr>
                                    <th className="py-4 px-3 text-left">Image</th>
                                    <th className="py-4 px-3 text-left">Food Name</th>
                                    <th className="py-4 px-3 text-left">Price</th>
                                    <th className="py-4 px-3 text-left">Quantity</th>
                                    <th className="py-4 px-3 text-left">Subtotal</th>
                                    <th className="py-4 px-3 text-left">Order Placed</th>
                                    <th className="py-4 px-3 text-left">Status</th>
                                    <th className="py-4  text-left">Summery</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-gray-800 text-sm sm:text-base">
                                {orders.map((order) => (
                                    <OrderTableRow
                                        order={order}
                                        key={order._id}
                                        onDelete={id => setOrders(prev => prev.filter(o => o._id !== id))}
                                    >

                                    </OrderTableRow>
                                ))}
                            </tbody>
                        </table>
                        : <div className='my-32 text-center'>
                            <p className='text-2xl text-gray-600'>You haven’t placed any orders yet.</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;