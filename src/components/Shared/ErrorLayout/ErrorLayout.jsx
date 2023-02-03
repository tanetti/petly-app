import { standartAnimation } from 'constants/animationVariants';
import { ErrorContainer, ErrorIcon, ErrorMessage } from './ErrorLayoutStayled';

export const ErrorLayout = () => {
  return (
    <ErrorContainer
      key="errorLayout"
      variants={standartAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ErrorIcon />
      <ErrorMessage>Sorry, something went wrong</ErrorMessage>
    </ErrorContainer>
  );
};
