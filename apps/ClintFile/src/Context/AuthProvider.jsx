/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      alert(token)
      return <div style={{ fontSize: "30px" }}>Loading...</div>
    }
    console.log(token)
    if (token) {
      setIsLoggedIn(true);
    }

    setLoading(false); 
  }, []);



  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout, loading }}>
      {loading ? <div style={{ fontSize: "30px" }}>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
