import PropTypes from 'prop-types';
import { standartAnimation } from 'constants/animationVariants';
import { AuthInput, FilledButton, OutlinedButton } from 'components/Shared';
import { StepContainer } from './Shared/StepContainerStyled';

export const SecondStep = ({ moveBackward }) => {
  const onMoveBackward = event => {
    event.preventDefault();
    moveBackward();
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
        <AuthInput title="Name" fullWidth type="text" label="Name" />
        <AuthInput
          title="City, region"
          fullWidth
          type="text"
          label="City, region"
        />
        <AuthInput
          title="Mobile phone"
          fullWidth
          type="text"
          label="Mobile phone"
        />
        <FilledButton type="submit">Register</FilledButton>
        <OutlinedButton onClick={onMoveBackward}>Back</OutlinedButton>
      </form>
    </StepContainer>
  );
};

SecondStep.propTypes = {
  moveBackward: PropTypes.func.isRequired,
};
