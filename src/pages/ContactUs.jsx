import React from 'react';
import PageTitle from '../hooks/PageTitle';
import contactBg from '../assets/para-02.jpg';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className="dark:bg-[#2e2e2e] dark:text-[#D8D8D8] transition-all duration-300">
            <PageTitle title={'Contact Us - Asian'} />

            {/* Hero section */}
            <div
                style={{
                    backgroundImage: `url(${contactBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                }}
                className="relative bg-fixed text-white min-h-[35vh] bg-[#1b1b1b7e] bg-blend-overlay flex flex-col items-center justify-start overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>
                <div className="relative z-10 w-full">
                    <div className="mt-60 text-center">
                        <h1 className="text-3xl lg:text-7xl font-thin">Contact Us</h1>
                    </div>
                </div>
            </div>

            {/* Contact form and info section */}
            <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12">
                {/* Left: Form & Intro */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">DROP US A LINE</h2>
                    <p className="text-gray-600 dark:text-[#D8D8D8] mb-6">
                        If you have any questions, suggestions, or need assistance, please don't hesitate to reach out. Our team is here to help and will respond as soon as possible. Your feedback is valuable and helps us improve our services.
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm mb-1">Name :</label>
                            <input type="text" placeholder="Your Name" className="w-full border-b p-2 focus:outline-none bg-transparent" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Email :</label>
                            <input type="email" placeholder="Your Email" className="w-full border-b p-2 focus:outline-none bg-transparent" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Message :</label>
                            <textarea rows="4" placeholder="Write your message..." className="w-full border-b p-2 focus:outline-none bg-transparent" />
                        </div>
                        <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">SEND NOW</button>
                    </form>
                </div>

                {/* Right: Map and contact info */}
                <div className="space-y-8">
                    <div className="w-full h-60 overflow-hidden rounded">
                        <iframe
                            title="Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.085998789489!2d-122.47825558468105!3d37.80384447975111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858089a5b5dbb1%3A0x7e928ef4dc2f3f!2sStorey%20Ave!5e0!3m2!1sen!2sus!4v1620565467312!5m2!1sen!2sus"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
                        <div className='dark:text-[#D8D8D8]'>
                            <div className="flex items-center gap-2 mb-2"><FaMapMarkerAlt /> <span>Address:</span></div>
                            <p>Avenue 234</p>
                            <p>New York - US</p>
                        </div>
                        <div className='dark:text-[#D8D8D8]'>
                            <div className="flex items-center gap-2 mb-2"><FaPhoneAlt /> <span>Phone:</span></div>
                            <p>00 837920234</p>
                        </div>
                        <div className='dark:text-[#D8D8D8]'>
                            <div className="flex items-center gap-2 mb-2"><FaEnvelope /> <span>Email:</span></div>
                            <p>info@table.com</p>
                        </div>
                        <div className='dark:text-[#D8D8D8]'>
                            <div className="flex items-center gap-2 mb-2"><FaClock /> <span>Check-In:</span></div>
                            <p>15:00 am</p>
                            <p>Check-Out: 11:00 am</p>
                        </div>
                    </div>

                    <div className="pt-4 border-t text-xl lg:text-sm  text-black dark:text-white">
                        AVAILABLE AT 10AM - 8PM <br />
                        <span className="text-3xl md:text-5xl lg:text-6xl font-light block mt-6">+12 345 678 384</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
