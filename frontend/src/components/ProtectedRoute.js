// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { SIGNIN_ROUTE } from '../constants/AppRoutes';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to={SIGNIN_ROUTE} />;
  }

  return children;
};

export default ProtectedRoute;
