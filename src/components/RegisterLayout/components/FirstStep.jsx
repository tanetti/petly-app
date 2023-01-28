import PropTypes from 'prop-types';
import { standartAnimation } from 'constants/animationVariants';
import { AuthInput, FilledButton } from 'components/Shared';
import { StepContainer } from './Shared/StepContainerStyled';

export const FirstStep = ({ moveForward }) => {
  const onMoveForward = event => {
    event.preventDefault();
    moveForward();
  };

  return (
    <StepContainer
      key="firstStep"
      variants={standartAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <form>
        <AuthInput title="Email" fullWidth type="text" label="Email" />
        <AuthInput title="Password" fullWidth type="text" label="Password" />
        <AuthInput
          title="Confirm Password"
          fullWidth
          type="text"
          label="Confirm Password"
        />
        <FilledButton type="submit" onClick={onMoveForward}>
          Next
        </FilledButton>
      </form>
    </StepContainer>
  );
};

FirstStep.propTypes = {
  moveForward: PropTypes.func.isRequired,
};
