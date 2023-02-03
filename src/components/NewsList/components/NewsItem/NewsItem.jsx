import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { makeShortTitle } from 'components/NewsList/utilities';
import {
  Article,
  ArticleDate,
  ArticleDescription,
  ArticleLink,
  ArticleTitle,
  BottomContainer,
  NewsListItem,
} from './NewsItemStyled';
import { standartAnimation } from 'constants/animationVariants';

export const NewsItem = ({ newsItemData }) => {
  const { title, description, date, url } = newsItemData;

  const shortTitle = makeShortTitle(title);

  return (
    <NewsListItem
      key={title}
      variants={standartAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      <Article>
        <ArticleTitle>{shortTitle}</ArticleTitle>
        <ArticleDescription>{description}</ArticleDescription>
        <BottomContainer>
          <ArticleDate>
            {!date ? 'N/A' : dayjs(date).format('DD/MM/YYYY')}
          </ArticleDate>
          <ArticleLink href={url} target="_blank" rel="noreferrer noopener">
            Read more
          </ArticleLink>
        </BottomContainer>
      </Article>
    </NewsListItem>
  );
};

NewsItem.propTypes = {
  newsItemData: PropTypes.exact({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
