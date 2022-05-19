import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/authSlice';
import { RoutesPropsType } from 'types/componentTypes';

const PrivateRoute = ({ redirectTo = '/', children }: RoutesPropsType) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
