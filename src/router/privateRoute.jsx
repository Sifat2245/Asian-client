import React, { use } from 'react';
import { authContext } from '../authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Lottie from 'lottie-react';
import loader from '../../public/loader.json'

const PrivateRoute = ({children}) => {
    const {user, loading} = use(authContext)
    const location = useLocation()

    if(loading){
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <div className='w-52'>
                    <Lottie animationData={loader} loop={true}></Lottie>
                </div>
            </div>
        )
    }

    if(!user){
        return <Navigate to={'/user/signin'} state={location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoute;