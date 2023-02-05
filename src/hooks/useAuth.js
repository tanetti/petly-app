import { useSelector } from 'react-redux';
import {
  selectUserId,
  selectIsLoggedIn,
  selectIsPending,
  selectIsRefreshing,
  selectWasRegistered,
  selectError,
  selectRefreshError,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const userId = useSelector(selectUserId);
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const isUserPending = useSelector(selectIsPending);
  const isUserRefreshing = useSelector(selectIsRefreshing);
  const wasRegistered = useSelector(selectWasRegistered);
  const userError = useSelector(selectError);
  const refreshError = useSelector(selectRefreshError);

  return {
    userId,
    isUserLoggedIn,
    isUserPending,
    isUserRefreshing,
    wasRegistered,
    userError,
    refreshError,
  };
};
