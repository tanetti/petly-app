import { standartAnimation } from 'constants/animationVariants';
import {
  NoResultContainer,
  NoResultIcon,
  NoResultMessage,
} from './NoResultLayoutStayled';

export const NoResultLayout = () => {
  return (
    <NoResultContainer
      key="noResultLayout"
      variants={standartAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <NoResultIcon />
      <NoResultMessage>No matches were found</NoResultMessage>
    </NoResultContainer>
  );
};
