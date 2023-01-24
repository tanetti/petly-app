import { createBrowserRouter, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRestrictedRoute } from 'components/PublicRestrictedRoute';
import {
  HomePage,
  LoginPage,
  NewsPage,
  NoticesPage,
  OurFriendPage,
  RegisterPage,
  UserPage,
} from 'pages';

export const router = createBrowserRouter([
  {
    element: <SharedLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'register',
        element: <PublicRestrictedRoute component={<RegisterPage />} />,
      },
      {
        path: 'login',
        element: <PublicRestrictedRoute component={<LoginPage />} />,
      },
      {
        path: 'friends',
        element: <OurFriendPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'notices/:categoryName',
        element: <NoticesPage />,
      },
      {
        path: 'user',
        element: <PrivateRoute component={<UserPage />} />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);
