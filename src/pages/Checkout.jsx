import React, { use, useState } from 'react';
import bgImg from '../assets/para-01.jpg';
import { useLocation, useNavigate } from 'react-router';
import { authContext } from '../authProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import PageTitle from '../hooks/PageTitle';


const Checkout = () => {
    const location = useLocation()
    const foodData = location.state || {}
    const { user } = use(authContext)
    // console.log(user.email);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const { _id, image, name, cuisine, qntity } = foodData


    const quantity = foodData.qntity || 1
    const price = foodData.price || 0
    const subtotal = price * quantity

    let shipping = 0
    if (subtotal < 79) {
        shipping = 5.52
    }

    const total = (subtotal + shipping)

    const handleOrderSubmit = e => {
        e.preventDefault()
        setLoading(true)
        const form = e.target
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())


        const orderDetails = {
            ...data,
            foodId: _id,
            itemName: name,
            itemImage: image,
            quantity: qntity,
            price: price,
            shipping: shipping,
            subTotalPrice: subtotal,
            totalPrice: total,
            orderTime: new Date().toISOString()
        }
        console.log(orderDetails);

        axios.post('https://asian-server-mu.vercel.app/orders', orderDetails)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Order Has been placed",
                        showConfirmButton: false,
                        timer: 1500
                    });


                    return axios.patch(`https://asian-server-mu.vercel.app/foods/${_id}`, {
                        orderedQuantity: qntity
                    })
                }

            })
            .finally(() => {
                setLoading(false)
                setTimeout(() => {
                    navigate('/myOrders')
                }, 1000);
            })

            .catch(error => {
                console.log('there is some problem', error);
            })
    }


    return (
        <>
            <PageTitle title={'Checkout - Asian'}></PageTitle>
            <div
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat'
                }}
                className="relative bg-fixed text-white min-h-[35vh] bg-[#1b1b1b7e] bg-blend-overlay flex flex-col items-center justify-start overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>

                <div className="relative z-10 w-full ">
                    <div className="mt-60 text-center">
                        <h1 className="text-3xl lg:text-7xl font-thin">Checkout</h1>
                    </div>
                </div>

            </div>

            <div data-theme="dark" className="min-h-screen bg-base-200 text-base-content p-4 lg:p-12">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column: Form */}
                    <form onSubmit={handleOrderSubmit} className="lg:pr-12 lg:border-r lg:border-base-300">
                        {/* Contact Section */}
                        <div className="block md:hidden py-12">
                            <div className="sticky top-12">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="w-20 rounded-lg relative ring ring-base-300">
                                                <div className="badge badge-neutral absolute top- right-0 z-10">{qntity}</div>
                                                <img src={image} />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold">{name}</p>
                                            <p className="text-sm text-base-content/70">{cuisine}</p>
                                        </div>
                                    </div>
                                    <p className="font-semibold">${price}</p>
                                </div>

                                <div className="divider"></div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between">
                                        <p>Subtotal</p>
                                        <p>${subtotal.toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Shipping</p>
                                        <p>${shipping}</p>
                                    </div>
                                </div>

                                <div className="divider"></div>

                                <div className="flex justify-between items-center">
                                    <p className="text-lg">Total</p>
                                    <p className="text-2xl font-bold">
                                        <span className="text-sm font-normal text-base-content/70 mr-2">USD</span>
                                        ${total.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8">
                            <div className="mb-4">
                                <h2 className="text-2xl font-semibold">Contact</h2>
                            </div>
                            <input
                                type="text"
                                value={user.email}
                                className="input input-bordered w-full mb-2"
                                name='userEmail' />

                            <div className="form-control">
                                <label className="label cursor-pointer justify-start gap-4">
                                    <input type="checkbox" className="checkbox checkbox-sm" />
                                    <span className="label-text">Email me with news and offers</span>
                                </label>
                            </div>
                        </div>

                        {/* Delivery Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Delivery</h2>
                            <select className="select select-bordered w-full mb-4" name='country'>
                                <option>Bangladesh</option>
                                <option>United Kingdom</option>
                                <option>United States</option>
                            </select>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="text" name='firstName' placeholder="First name (optional)" className="input input-bordered w-full" required />
                                <input type="text" name='lastName' placeholder="Last name" className="input input-bordered w-full" required />
                            </div>
                            <input type="text" name='address' placeholder="Address" className="input input-bordered w-full mb-4" required />
                            <input type="text" name='apartment' placeholder="Apartment, suite, etc. (optional)" className="input input-bordered w-full mb-4" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="text" name='city' placeholder="City" className="input input-bordered w-full" required />
                                <input type="text" name='postalCode' placeholder="Postal code (optional)" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-start gap-4">
                                    <input type="checkbox" className="checkbox checkbox-sm" />
                                    <span className="label-text">Save this information for next time</span>
                                </label>
                            </div>
                        </div>

                        {/* Shipping Method Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Shipping method</h2>
                            <div className="p-4 border border-base-300 rounded-lg flex justify-between items-center">
                                <span>Standard</span>
                                <span className="font-semibold">${shipping}</span>
                            </div>
                        </div>


                        {/* Payment Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-2">Payment</h2>
                            <p className="text-sm text-base-content/70 mb-4">All transactions are secure and encrypted.</p>
                            <div className="border border-base-300 rounded-lg">
                                <div className="p-4 border-b border-base-300">
                                    <span>Credit card</span>
                                </div>
                                <div className="p-4 space-y-4 bg-base-300/30 rounded-b-lg">
                                    <input type="text" placeholder="Card number" className="input input-bordered w-full" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Expiration date (MM / YY)" className="input input-bordered w-full" />
                                        <input type="text" placeholder="Security code" className="input input-bordered w-full" />
                                    </div>
                                    <input type="text" placeholder="Name on card" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="form-control mt-4">
                                <label className="label cursor-pointer justify-start gap-4">
                                    <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                                    <span className="label-text">Use shipping address as billing address</span>
                                </label>
                            </div>
                        </div>

                        <button type='submit' className="btn btn-warning btn-block text-black">{loading ? 'Proceeding...' : 'Pay Now'}</button>

                    </form>

                    {/* Right Column: Order Summary */}
                    <div className="lg:pl-12 hidden md:block">
                        <div className="sticky top-12">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="avatar">
                                        <div className="w-20 rounded-lg relative ring ring-base-300">
                                            <div className="badge badge-neutral absolute top- right-0 z-10">{qntity}</div>
                                            <img src={image} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold">{name}</p>
                                        <p className="text-sm text-base-content/70">{cuisine}</p>
                                    </div>
                                </div>
                                <p className="font-semibold">${price}</p>
                            </div>

                            <div className="divider"></div>

                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between">
                                    <p>Subtotal</p>
                                    <p>${subtotal.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Shipping</p>
                                    <p>${shipping}</p>
                                </div>
                            </div>

                            <div className="divider"></div>

                            <div className="flex justify-between items-center">
                                <p className="text-lg">Total</p>
                                <p className="text-2xl font-bold">
                                    <span className="text-sm font-normal text-base-content/70 mr-2">USD</span>
                                    ${total.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Checkout;