import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import loader from '../../public/loader.json'
import Lottie from 'lottie-react';

const MainLayout = () => {
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'

    return (
        <div>
            <ScrollRestoration></ScrollRestoration>
            <Navbar></Navbar>

            {isLoading ? (<div className='min-h-screen flex justify-center items-center dark:bg-[#2e2e2e] dark:text-[#D8D8D8] transition-all duration-300'>
                <div className='w-52'>
                    <Lottie animationData={loader} loop={true}></Lottie>
                </div>
            </div>)

                : <Outlet></Outlet>}

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;