import { useState } from 'react';
import { useAuth } from 'hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { FirstStep, SecondStep } from './components';
import { standartAnimation } from 'constants/animationVariants';
import {
  AuthMotionContainer,
  CommonProgressBar,
  CommonProgressBarContainer,
  LayoutContainer,
  LayoutHint,
  LayoutHintLink,
  LayoutTitle,
} from 'components/Shared';

export const RegisterLayout = () => {
  const [isOnTheFirstStep, setIsOnTheFirstStep] = useState(true);
  const [firstStepFormData, setFirstStepFormData] = useState(null);
  const [secondStepFormData, setSecondStepFormData] = useState(null);
  const { isUserPending } = useAuth();

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
      <CommonProgressBarContainer>
        <AnimatePresence>
          {!isUserPending ? (
            <motion.div
              variants={standartAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <CommonProgressBar />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </CommonProgressBarContainer>
    </LayoutContainer>
  );
};
