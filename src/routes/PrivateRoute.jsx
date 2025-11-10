// Private Route protection
import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loader from '../features/Loader';


const PrivateRoute = ({ children }) => {
    const { user, load } = useAuth()
    const location = useLocation()
    if (load) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }

    return <Navigate replace state={{from:location}} to='/login' ></Navigate>

};

export default PrivateRoute;