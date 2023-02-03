import { useGetNewsQuery } from 'redux/news/newsApi';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { NewsItem } from './components';
import { NewsListStyled } from './NewsListStyled';
import { LoaderLayout } from 'components/Shared';
import { standartAnimation } from 'constants/animationVariants';

export const NewsList = () => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');
  const { data, error, isLoading } = useGetNewsQuery(searchValue);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? <LoaderLayout requestEntityName="news" /> : null}

      {!isLoading && !error && data?.length ? (
        <NewsListStyled
          key="newsList"
          variants={standartAnimation}
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
