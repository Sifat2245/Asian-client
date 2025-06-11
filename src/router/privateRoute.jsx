import React, { use } from 'react';
import { authContext } from '../authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(authContext)
    const location = useLocation()

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if(!user){
        return <Navigate to={'/user/signin'} state={location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoute;