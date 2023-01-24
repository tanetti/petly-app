import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/login',
}) => {
  const location = useLocation();
  const { isUserLoggedIn, isUserRefreshing } = useAuth();

  return !isUserLoggedIn && !isUserRefreshing ? (
    <Navigate to={redirectTo} replace={true} state={{ from: location }} />
  ) : (
    Component
  );
};
