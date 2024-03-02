import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const ProtectedRoute = ({ Children }) => {
  const { isLoggedIn } = useContext(AuthContext);


  
  if(isLoggedIn){
    return Children 
  }else{
    return  <Navigate to="/Login" />;
  }

 
};

export default ProtectedRoute;