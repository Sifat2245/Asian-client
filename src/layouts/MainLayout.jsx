import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import loader from '../../public/loader.json'
import Lottie from 'lottie-react';

const MainLayout = () => {
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'
    return (
        <div>
            <Navbar></Navbar>
            {isLoading ? (<div className='min-h-screen flex justify-center items-center'>
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