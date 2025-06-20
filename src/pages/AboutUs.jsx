import React from 'react';
import PageTitle from '../hooks/PageTitle';
import aboutBg from '../assets/para-04.jpg';
import specialistBanner from '../assets/team/para-08.jpg'
import specialistImg1 from '../assets/team/img-14.jpg'
import specialistImg2 from '../assets/team/img-21.jpg'
import specialistImg3 from '../assets/team/img-22.jpg'
import specialistImg4 from '../assets/team/img-23.jpg'
import aboutImage from '../assets/photo-1600891964599-f61ba0e24092.jpeg'

const AboutUs = () => {
    return (
        <div className="dark:bg-[#2e2e2e] dark:text-[#D8D8D8] transition-all duration-300">
            <PageTitle title={'About Us - Asian'} />

            {/* Hero Section */}
            <div
                style={{
                    backgroundImage: `url(${aboutBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                }}
                className="relative bg-fixed text-white min-h-[35vh] bg-[#1b1b1ba9] bg-blend-overlay flex flex-col items-center justify-start overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>

                <div className="relative z-10 w-full">
                    <div className="mt-60 text-center">
                        <h1 className="text-3xl lg:text-7xl font-thin">About Us</h1>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12">
                {/* Left: Text Content */}
                <div>
                    <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
                    <p className="text-gray-600 dark:text-[#D8D8D8] mb-6 leading-relaxed">
                        Asian is a modern restaurant committed to delivering an authentic and memorable dining experience. Since our inception, we’ve focused on using only the freshest ingredients, traditional recipes, and a dash of innovation to satisfy every palate.
                    </p>
                    <p className="text-gray-600 dark:text-[#D8D8D8] mb-6 leading-relaxed">
                        Our journey started with a single vision — to create a place where food lovers could come together and celebrate the diverse flavors of Asia. With passion and dedication, we’ve grown into a trusted destination for quality food and warm hospitality.
                    </p>
                    <p className="text-gray-600 dark:text-[#D8D8D8] leading-relaxed">
                        Whether you're here for a quiet dinner, a family gathering, or a special celebration, we strive to make every experience unforgettable.
                    </p>
                </div>

                {/* Right: Image */}
                <div>
                    <img
                        src={aboutImage}
                        alt="Restaurant interior"
                        className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="relative bg-cover bg-center bg-no-repeat text-white py-52 px-4" style={{ backgroundImage: `url(${specialistBanner})`, backgroundPosition: 'top' }}>
                <div className="bg-black/50 absolute inset-0"></div>
                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <h2 className="text-6xl font-light mb-4">SPECIALISTS</h2>
                    <p className="max-w-2xl mx-auto mb-6 text-xl text-gray-200">
                        Meet the talented and passionate individuals who bring our flavors to life — from culinary creativity to outstanding customer care.
                    </p>
                    <button className="bg-orange-600 hover:bg-orange-700 transition px-6 py-2 rounded text-white">
                        Book a Table
                    </button>

                    <div className="absolute mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Nick Mcallister",
                                role: "Owner",
                                img: specialistImg1,
                                bio: "Visionary founder behind our unique dining experience. Nick ensures excellence in every detail."
                            },
                            {
                                name: "Ralph Johnson",
                                role: "Customer Care",
                                img: specialistImg2,
                                bio: "Always putting guests first, Ralph leads our front desk with warmth and professionalism."
                            },
                            {
                                name: "Benj Spitch",
                                role: "Co-Founder",
                                img: specialistImg3,
                                bio: "Benj's culinary insights and business expertise keep our kitchen running with flair."
                            },
                            {
                                name: "Tom Zafron",
                                role: "Specialist",
                                img: specialistImg4,
                                bio: "An expert in fusion cuisine, Tom blends tradition with innovation in every dish."
                            },
                        ].map((member, idx) => (
                            <div key={idx} className="text-center text-black dark:text-white">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                                />
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="text-sm uppercase text-orange-600 mb-2">{member.role}</p>
                                <p className="text-gray-500 dark:text-gray-300 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-orange-50 dark:bg-[#1f1f1f] mt-96 py-16">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
                    {[
                        { title: '10+', subtitle: 'Years of Experience' },
                        { title: '500+', subtitle: 'Dishes Served Daily' },
                        { title: '95%', subtitle: 'Customer Satisfaction' },
                        { title: '100K+', subtitle: 'Happy Guests' },
                    ].map((item, idx) => (
                        <div key={idx}>
                            <h3 className="text-4xl font-bold text-orange-600 mb-2">{item.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center py-20 px-4">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Taste the Difference?</h2>
                <p className="text-gray-600 dark:text-[#D8D8D8] mb-6">
                    Come visit us today or make a reservation online to enjoy a culinary experience like no other.
                </p>
                <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
                    Book a Table
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
