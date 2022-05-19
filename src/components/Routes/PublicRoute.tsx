import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/authSlice';
import { RoutesPropsType } from 'types/componentTypes';

const PublicRoute = ({ children, restricted = false }: RoutesPropsType) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={'/contacts'} /> : children;
};

export default PublicRoute;
