import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('jwtToken') || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem('jwtToken', token);
    } else {
      localStorage.removeItem('jwtToken');
    }
  }, [token]);

  const signIn = (jwtToken) => {
    setToken(jwtToken);
    navigate('/'); // Navigate to the home page or wherever
  };

  const signOut = () => {
    setToken(null);
    navigate('/signin');
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
