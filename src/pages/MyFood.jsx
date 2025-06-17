import React, { use, useEffect, useState } from 'react';
import bgImg from '../assets/para-09-1.jpg'
import PageTitle from '../hooks/PageTitle';
import { authContext } from '../authProvider/AuthProvider';
import axios from 'axios';
import FoodTableRows from '../components/FoodTableRows';
import Lottie from 'lottie-react';
import loader from '../../public/loader.json'


const MyFood = () => {

    const [foods, setFoods] = useState([])
    const { user } = use(authContext)
    const [loading, setLoading] = useState(true)

    const token =  user.accessToken
   

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://asian-server-mu.vercel.app/food/${user.email}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => {
                    const foodData = res.data
                    setFoods(foodData)
                    setLoading(false)
                })
        }
    }, [user?.email, token])

    if(loading){
    return(
      <div className='min-h-screen flex justify-center items-center dark:bg-[#2e2e2e] dark:text-[#D8D8D8] transition-all duration-300'>
                <div className='w-52'>
                    <Lottie animationData={loader} loop={true}></Lottie>
                </div>
            </div>
    )
  }


    return (
            <div className='dark:bg-[#2e2e2e] dark:text-[#D8D8D8] transition-all duration-300'>
                <PageTitle title={'My Food - Asian'}></PageTitle>
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
                            <h1 className="text-3xl lg:text-7xl font-thin">My Foods</h1>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="overflow-x-auto mt-10 px-2 md:px-6 lg:px-10 py-32">
                        {foods.length > 0 ?
                            <table className="min-w-4/5 mx-auto bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 dark:bg-neutral-500">
                                <thead className="bg-[#DB7137] text-white text-sm sm:text-base">
                                    <tr>
                                        <th className="py-4 px-3 text-left">Image</th>
                                        <th className="py-4 px-3 text-left">Food Name</th>
                                        <th className="py-4 px-3 text-left">Quantity</th>
                                        <th className="py-4 px-3 text-left">Status</th>
                                        <th className="py-4 px-3 text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-800 text-sm sm:text-base">
                                    {foods.map((food) => (
                                        <FoodTableRows food={food} key={food._id}></FoodTableRows>
                                    ))}
                                </tbody>
                            </table>
                            : <div className='my-32 text-center'>
                                <p className='text-2xl text-gray-600 dark:text-[#D8D8D8]'>You haven't added any food yet</p>
                            </div>
                        }
                    </div>
                </div>
            </div>

    );
};

export default MyFood;