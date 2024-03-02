/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/Login" />;
  }
};

export default ProtectedRoute;
