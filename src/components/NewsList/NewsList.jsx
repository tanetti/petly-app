import { useGetNewsQuery } from 'redux/news/newsApi';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { NewsItem } from './components';
import { NewsListStyled } from './NewsListStyled';
import { ErrorLayout, LoaderLayout, NoResultLayout } from 'components/Shared';
import { ATANDART_ANIMATION_VARIANT } from 'constants/animationVariants';

export const NewsList = () => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');
  const { data, error, isLoading, isPending } = useGetNewsQuery(searchValue);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? <LoaderLayout requestEntityName="news" /> : null}

      {!isLoading && !isPending && error ? <ErrorLayout /> : null}

      {!isLoading && !isPending && !error && !data?.length ? (
        <NoResultLayout />
      ) : null}

      {!isLoading && !error && data?.length ? (
        <NewsListStyled
          key="newsList"
          variants={ATANDART_ANIMATION_VARIANT}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <AnimatePresence>
            {data.map(newsItemData => (
              <NewsItem key={newsItemData.title} newsItemData={newsItemData} />
            ))}
          </AnimatePresence>
        </NewsListStyled>
      ) : null}
    </AnimatePresence>
  );
};
