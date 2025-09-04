import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
    const token = useSelector((state) => state.user.token);
    if(token) {
        return <Navigate to="/" replace />;
    }

    // user logged in
    return children;
}


export default PublicRoute;
