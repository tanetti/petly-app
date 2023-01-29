import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import {Logout} from './Logout/Logout'

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
  // <RouterProvider router={router} />
  <Logout/>
  );
};
