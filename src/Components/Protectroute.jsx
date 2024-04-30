import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Protectroute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching user authentication status
        setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust timeout as needed or replace with actual authentication check
    }, []);

    if (loading) {
        // Return loading indicator or null while checking authentication status
        return null;
    }

    if (user) {
        // If user is authenticated, render children
        return children;
    } else {
        // If user is not authenticated, navigate to login page
        return <Navigate to="/login" state={{ from: location.pathname }} />;
    }
};

export default Protectroute;
