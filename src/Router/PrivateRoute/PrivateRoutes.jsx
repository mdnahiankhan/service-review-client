import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return children;
    }
    return (
        <div>

        </div>
    );
};

export default PrivateRoutes;