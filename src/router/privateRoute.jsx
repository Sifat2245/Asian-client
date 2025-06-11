import React, { use } from 'react';
import { authContext } from '../authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = use(authContext)
    const location = useLocation()

    if(!user){
        return <Navigate to={'/user/signin'} state={location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoute;