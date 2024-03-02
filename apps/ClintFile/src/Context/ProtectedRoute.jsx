/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useContext(AuthContext);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    setIsAuthReady(!loading);
  }, [loading]);

  if (!isAuthReady) {
    return <div style={{ fontSize: "30px" }}>Loading...</div>;
  }

  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/Login" />;
  }
};

export default ProtectedRoute;
