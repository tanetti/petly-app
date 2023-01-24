import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsPending,
  selectIsRefreshing,
  selectError,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const isUserPending = useSelector(selectIsPending);
  const isUserRefreshing = useSelector(selectIsRefreshing);
  const userError = useSelector(selectError);

  return {
    user,
    isUserLoggedIn,
    isUserPending,
    isUserRefreshing,
    userError,
  };
};
