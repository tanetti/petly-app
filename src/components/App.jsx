import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    console.log(process.env.REACT_APP_API_BASE_URL);
  }, [dispatch]);

  return <RouterProvider router={router} />;
};
