import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FirstStep, SecondStep } from './components';
import {
  AuthMotionContainer,
  LayoutContainer,
  LayoutHint,
  LayoutHintLink,
  LayoutTitle,
} from 'components/Shared';
import { standartAnimation } from 'constants/animationVariants';

export const RegisterLayout = () => {
  const [isOnTheFirstStep, setIsOnTheFirstStep] = useState(true);
  const [firstStepFormData, setFirstStepFormData] = useState();
  const [secondStepFormData, setSecondStepFormData] = useState();

  return (
    <LayoutContainer>
      <LayoutTitle>Registration</LayoutTitle>
      <AnimatePresence mode="wait">
        {isOnTheFirstStep ? (
          <AuthMotionContainer
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
          </AuthMotionContainer>
        ) : (
          <AuthMotionContainer
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
          </AuthMotionContainer>
        )}
      </AnimatePresence>

      <LayoutHint>
        Already have an account?&nbsp;
        <LayoutHintLink to="/login">Login</LayoutHintLink>
      </LayoutHint>
    </LayoutContainer>
  );
};
