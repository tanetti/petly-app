import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRestrictedRoute } from 'components/PublicRestrictedRoute';

const HomePage = lazy(() =>
  import('pages/HomePage/HomePage').then(module => ({
    default: module.HomePage,
  }))
);

const LoginPage = lazy(() =>
  import('pages/LoginPage/LoginPage').then(module => ({
    default: module.LoginPage,
  }))
);

const NewsPage = lazy(() =>
  import('pages/NewsPage/NewsPage').then(module => ({
    default: module.NewsPage,
  }))
);

const NoticesPage = lazy(() =>
  import('pages/NoticesPage/NoticesPage').then(module => ({
    default: module.NoticesPage,
  }))
);

const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage').then(module => ({
    default: module.OurFriendsPage,
  }))
);

const RegisterPage = lazy(() =>
  import('pages/RegisterPage/RegisterPage').then(module => ({
    default: module.RegisterPage,
  }))
);

const UserPage = lazy(() =>
  import('pages/UserPage/UserPage').then(module => ({
    default: module.UserPage,
  }))
);

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
        element: <OurFriendsPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'notices/:categoryName?',
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
