import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import { ErrorContainer, ErrorIcon, ErrorMessage } from './ErrorLayoutStayled';

export const ErrorLayout = () => {
  return (
    <ErrorContainer
      key="errorLayout"
      variants={STANDART_ANIMATION_VARIANT}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ErrorIcon />
      <ErrorMessage>Sorry, something went wrong</ErrorMessage>
    </ErrorContainer>
  );
};
