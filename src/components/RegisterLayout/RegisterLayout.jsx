import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FirstStep, SecondStep } from './components';
import {
  LayoutContainer,
  LayoutHint,
  LayoutHintLink,
  LayoutTitle,
} from './RegisterLayoutStyled';
import { standartAnimation } from 'constants/animationVariants';
import { StepContainer } from './components';

export const RegisterLayout = () => {
  const [isOnTheFirstStep, setIsOnTheFirstStep] = useState(true);
  const [firstStepFormData, setFirstStepFormData] = useState();
  const [secondStepFormData, setSecondStepFormData] = useState();

  return (
    <LayoutContainer>
      <LayoutTitle>Registration</LayoutTitle>
      <AnimatePresence mode="wait">
        {isOnTheFirstStep ? (
          <StepContainer
            key="firstStep"
            variants={standartAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <FirstStep
              moveForward={() => setIsOnTheFirstStep(false)}
              firstStepFormData={firstStepFormData}
              setFirstStepFormData={setFirstStepFormData}
            />
          </StepContainer>
        ) : (
          <StepContainer
            key="secondStep"
            variants={standartAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <SecondStep
              moveBackward={() => setIsOnTheFirstStep(true)}
              firstStepFormData={firstStepFormData}
              secondStepFormData={secondStepFormData}
              setSecondStepFormData={setSecondStepFormData}
            />
          </StepContainer>
        )}
      </AnimatePresence>

      <LayoutHint>
        Don't have an account?&nbsp;
        <LayoutHintLink to="/login">Login</LayoutHintLink>
      </LayoutHint>
    </LayoutContainer>
  );
};
