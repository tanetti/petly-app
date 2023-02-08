import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import PropTypes from 'prop-types';
import { CommonProgressBar } from '../CommonProgressBarStyled';
import {
  LoadingContainer,
  LoadingMessage,
  LoadingProgressBarContainer,
} from './LoaderLayoutStyled';

export const LoaderLayout = ({ requestEntityName }) => {
  return (
    <LoadingContainer
      key="loadingLayout"
      variants={STANDART_ANIMATION_VARIANT}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <LoadingMessage>{`Loading ${requestEntityName.toLowerCase()} ...`}</LoadingMessage>
      <LoadingProgressBarContainer>
        <CommonProgressBar />
      </LoadingProgressBarContainer>
    </LoadingContainer>
  );
};

LoaderLayout.propTypes = {
  requestEntityName: PropTypes.string,
};
