// import { useParams, useSearchParams } from 'react-router-dom';
// import { useGetAllNoticesQuery } from 'redux/notices/noticesApi';
import { AnimatePresence } from 'framer-motion';
import { NoticesItem } from './components';
import { NoticesListStyled } from './NoticesListStyled';
import { ErrorLayout, LoaderLayout, NoResultLayout } from 'components/Shared';
import { standartAnimation } from 'constants/animationVariants';
import notices from 'TEMP/notices';

export const NoticesList = () => {
  //   const { categoryName } = useParams();
  //   const [searchParams] = useSearchParams();
  //   const searchValue = searchParams.get('search');

  const data = notices;
  const error = null;
  const isLoading = false;
  const isPending = false;

  //   const { data, error, isLoading, isPending } = useGetAllNoticesQuery({
  //     categoryName,
  //     searchValue,
  //   });

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
