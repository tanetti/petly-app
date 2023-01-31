import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsPending,
  selectIsRefreshing,
  selectWasRegistered,
  selectError,
  selectRefreshError,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const isUserPending = useSelector(selectIsPending);
  const isUserRefreshing = useSelector(selectIsRefreshing);
  const wasRegistered = useSelector(selectWasRegistered);
  const userError = useSelector(selectError);
  const refreshError = useSelector(selectRefreshError);

  return {
    user,
    isUserLoggedIn,
    isUserPending,
    isUserRefreshing,
    wasRegistered,
    userError,
    refreshError,
  };
};
