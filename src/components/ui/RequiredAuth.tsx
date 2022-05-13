import React, { ReactElement } from 'react';
import { Navigate, useLocation  } from 'react-router-dom';

type RequiredAuthProps = {
    children: ReactElement
}

const RequiredAuth = ({ children }: RequiredAuthProps) => {
    const location = useLocation();

    if(localStorage.getItem('user')) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children
}

export default RequiredAuth