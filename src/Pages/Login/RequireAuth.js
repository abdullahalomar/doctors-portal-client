import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Shared/Loader';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation;

    if (loading) {
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }
    return children;
};

export default RequireAuth;