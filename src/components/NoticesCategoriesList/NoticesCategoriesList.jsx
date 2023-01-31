import { NoticeCategoryItem } from 'components/NoticeCategoryItem';
import { Wrapper, List } from './NoticesCategoryList.styled';
import PropTypes from 'prop-types';
export const NoticesCategoriesList = ({ notices }) => {
  return (
    <Wrapper>
      <List>
        {notices.map(notice => (
          <NoticeCategoryItem notice={notice} key={notice.id} />
        ))}
      </List>
    </Wrapper>
  );
};

NoticesCategoriesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
