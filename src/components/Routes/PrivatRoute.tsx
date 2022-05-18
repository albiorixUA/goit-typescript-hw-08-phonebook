import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/authSlice';
import { RoutesPropsType } from 'types/componentTypes';

const PrivateRoute: React.FC<RoutesPropsType> = ({ children }): any => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;
