import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useAuth } from 'hooks';
import { useGetNoticesQuery } from 'redux/notices/noticesApi';
import { AnimatePresence } from 'framer-motion';
import {
  PRIVAT_CATEGORIES,
  PUBLIC_CATEGORIES,
} from 'constants/noticesCategory';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import { ErrorLayout, LoaderLayout, NoResultLayout } from 'components/Shared';
import { NoticesItem } from './components';
import { NoticesListStyled } from './NoticesListStyled';

export const NoticesList = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');
  const { isUserLoggedIn } = useAuth();

  const validPublicCategories = [
    ...PUBLIC_CATEGORIES.map(({ category }) => category),
    'all',
  ];
  const validPrivatCategories = PRIVAT_CATEGORIES.map(
    ({ category }) => category
  );
  const isCategoryValid = isUserLoggedIn
    ? categoryName &&
      (validPublicCategories.includes(categoryName) ||
        validPrivatCategories.includes(categoryName))
    : categoryName && validPublicCategories.includes(categoryName);

  const { data, error, isLoading, isPending } = useGetNoticesQuery(
    {
      categoryName,
      searchValue,
    },
    {
      skip: !isCategoryValid,
    }
  );

  useEffect(() => {
    if (isCategoryValid) return;

    navigate('/notices/sell');
  }, [isCategoryValid, navigate]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? <LoaderLayout requestEntityName="notices" /> : null}

      {!isLoading && !isPending && error ? <ErrorLayout /> : null}

      {!isLoading && !isPending && !error && !data?.length ? (
        <NoResultLayout />
      ) : null}

      {!isLoading && !error && data?.length ? (
        <NoticesListStyled
          key="noticesList"
          variants={STANDART_ANIMATION_VARIANT}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <AnimatePresence>
            {data.map(notice => (
              <NoticesItem key={notice._id} noticeData={notice} />
            ))}
          </AnimatePresence>
        </NoticesListStyled>
      ) : null}
    </AnimatePresence>
  );
};
