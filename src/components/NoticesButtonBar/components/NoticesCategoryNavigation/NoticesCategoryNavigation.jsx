import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { noticesApi } from 'redux/notices/noticesApi';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavLinkButtonLike } from 'components/Shared';
import {
  PRIVAT_CATEGORIES,
  PUBLIC_CATEGORIES,
} from 'constants/noticesCategory';
import { CategoryList } from './NoticesCategoryNavigationStyled';

export const NoticesCategoryNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { isUserLoggedIn } = useAuth();

  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');

  useEffect(() => {
    if (categoryName !== 'favorite') return;

    dispatch(noticesApi.util.invalidateTags(['Notices']));
  }, [categoryName, dispatch]);

  useEffect(() => {
    if (categoryName) return;

    navigate('/notices/sell');
  }, [categoryName, navigate]);

  return (
    <nav>
      <CategoryList>
        {PUBLIC_CATEGORIES.map(({ name, route }) => (
          <li key={name}>
            <NavLinkButtonLike
              to={searchValue ? `${route}?search=${searchValue}` : route}
            >
              {name}
            </NavLinkButtonLike>
          </li>
        ))}

        <li>
          <NavLinkButtonLike
            to={
              searchValue
                ? `/notices/all?search=${searchValue}`
                : '/notices/all'
            }
          >
            all
          </NavLinkButtonLike>
        </li>

        {isUserLoggedIn
          ? PRIVAT_CATEGORIES.map(({ name, route }) => (
              <li key={name}>
                <NavLinkButtonLike
                  to={searchValue ? `${route}?search=${searchValue}` : route}
                >
                  {name}
                </NavLinkButtonLike>
              </li>
            ))
          : null}
      </CategoryList>
    </nav>
  );
};
