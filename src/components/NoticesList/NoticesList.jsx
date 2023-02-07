import { useParams, useSearchParams } from 'react-router-dom';
import { useGetNoticesQuery } from 'redux/notices/noticesApi';
import { AnimatePresence } from 'framer-motion';
import { NoticesItem } from './components';
import { NoticesListStyled } from './NoticesListStyled';
import { ErrorLayout, LoaderLayout, NoResultLayout } from 'components/Shared';
import { standartAnimation } from 'constants/animationVariants';

export const NoticesList = () => {
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');

  const { data, error, isLoading, isPending } = useGetNoticesQuery({
    categoryName,
    searchValue,
  });

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
          variants={standartAnimation}
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
