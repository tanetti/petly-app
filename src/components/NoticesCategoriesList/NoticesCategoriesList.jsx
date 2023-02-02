import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectVisibleNotices } from 'redux/notices/noticesSelectors';
import { NoticeCategoryItem } from 'components/NoticeCategoryItem';
import { Wrapper, List } from './NoticesCategoryList.styled';
import PropTypes from 'prop-types';
export const NoticesCategoriesList = ({ notices }) => {
  // const visibleNotices = useSelector(selectVisibleNotices);
  return (
    <Wrapper>
      <List>
        {notices/*visibleNotices*/.map(notice => (
          <NoticeCategoryItem notice={notice} key={notice._id} />
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
