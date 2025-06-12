import React from 'react';
import bgImg from '../assets/para-01.jpg';


const Checkout = () => {
    return (
        <>
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
                    <div className="lg:pr-12 lg:border-r lg:border-base-300">
                        {/* Contact Section */}
                        <div className="mb-8">
                            <div className="mb-4">
                                <h2 className="text-2xl font-semibold">Contact</h2>
                            </div>
                            <input type="text" placeholder="Email or mobile phone number" className="input input-bordered w-full mb-2" />
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
                            <select className="select select-bordered w-full mb-4">
                                <option>Bangladesh</option>
                                <option>United Kingdom</option>
                                <option>United States</option>
                            </select>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="First name (optional)" className="input input-bordered w-full" />
                                <input type="text" placeholder="Last name" className="input input-bordered w-full" />
                            </div>
                            <input type="text" placeholder="Address" className="input input-bordered w-full mb-4" />
                            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="input input-bordered w-full mb-4" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="City" className="input input-bordered w-full" />
                                <input type="text" placeholder="Postal code (optional)" className="input input-bordered w-full" />
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
                                <span className="font-semibold">$17.52</span>
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

                        <button className="btn btn-warning btn-block text-black">Pay now</button>

                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:pl-12">
                        <div className="sticky top-12">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="avatar">
                                        <div className="w-16 rounded-lg relative ring ring-base-300">
                                            {/* Placeholder for product image */}
                                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80" alt="English Breakfast" />
                                            <div className="badge badge-neutral absolute -top-2 -right-2">1</div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold">English Breakfast</p>
                                        <p className="text-sm text-base-content/70">Veg / Britain / Egg</p>
                                    </div>
                                </div>
                                <p className="font-semibold">$350.00</p>
                            </div>

                            <div className="divider"></div>

                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between">
                                    <p>Subtotal</p>
                                    <p>$350.00</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Shipping</p>
                                    <p>$17.52</p>
                                </div>
                            </div>

                            <div className="divider"></div>

                            <div className="flex justify-between items-center">
                                <p className="text-lg">Total</p>
                                <p className="text-2xl font-bold">
                                    <span className="text-sm font-normal text-base-content/70 mr-2">USD</span>
                                    $367.52
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