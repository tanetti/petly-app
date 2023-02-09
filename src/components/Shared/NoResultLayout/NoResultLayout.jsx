import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import {
  NoResultContainer,
  NoResultIcon,
  NoResultMessage,
} from './NoResultLayoutStayled';

export const NoResultLayout = () => {
  return (
    <NoResultContainer
      key="noResultLayout"
      variants={STANDART_ANIMATION_VARIANT}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <NoResultIcon />
      <NoResultMessage>No matches were found</NoResultMessage>
    </NoResultContainer>
  );
};
