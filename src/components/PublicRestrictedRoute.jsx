import { useAuth } from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export const PublicRestrictedRoute = ({
  component: Component,
  redirectTo = '/user',
}) => {
  const location = useLocation();
  const { isUserLoggedIn } = useAuth();

  const redirectionRoute = location.state?.from ?? redirectTo;

  return isUserLoggedIn ? (
    <Navigate to={redirectionRoute} replace={true} />
  ) : (
    Component
  );
};
