import React, { ReactElement } from 'react';
import { Navigate, useLocation  } from 'react-router-dom';

type RequiredAuthProps = {
    children: ReactElement
}

const RequiredAuth = ({ children }: RequiredAuthProps) => {
    const location = useLocation();
    if(localStorage.getItem('user') === null) {
        return <Navigate to="/" state={{ from: location }} />;
    } else {
        return children;
    }
}

export default RequiredAuth