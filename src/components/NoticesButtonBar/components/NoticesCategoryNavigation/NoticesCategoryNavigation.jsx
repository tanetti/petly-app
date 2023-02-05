import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavLinkButtonLike } from 'components/Shared';
import {
  PRIVAT_CATEGORIES,
  PUBLIC_CATEGORIES,
} from 'constants/noticesCategory';
import { CategoryList } from './NoticesCategoryNavigationStyled';

export const NoticesCategoryNavigation = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const { isUserLoggedIn } = useAuth();

  useEffect(() => {
    if (categoryName) return;

    navigate('/notices/sell');
  }, [categoryName, navigate]);

  return (
    <nav>
      <CategoryList>
        {PUBLIC_CATEGORIES.map(({ name, route }) => (
          <li key={name}>
            <NavLinkButtonLike to={route}>{name}</NavLinkButtonLike>
          </li>
        ))}

        <li>
          <NavLinkButtonLike to="/notices/all">all</NavLinkButtonLike>
        </li>

        {isUserLoggedIn
          ? PRIVAT_CATEGORIES.map(({ name, route }) => (
              <li key={name}>
                <NavLinkButtonLike to={route}>{name}</NavLinkButtonLike>
              </li>
            ))
          : null}
      </CategoryList>
    </nav>
  );
};
