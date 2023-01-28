import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FirstStep, SecondStep } from './components';
import {
  LayoutContainer,
  LayoutHint,
  LayoutHintLink,
  LayoutTitle,
} from './RegisterLayoutStyled';

export const RegisterLayout = () => {
  const [isOnTheFirstStep, setIsOnTheFirstStep] = useState(true);

  return (
    <LayoutContainer>
      <LayoutTitle>Registration</LayoutTitle>
      <AnimatePresence mode="wait">
        {isOnTheFirstStep ? (
          <FirstStep moveForward={() => setIsOnTheFirstStep(false)} />
        ) : (
          <SecondStep moveBackward={() => setIsOnTheFirstStep(true)} />
        )}
      </AnimatePresence>

      <LayoutHint>
        Don't have an account?&nbsp;
        <LayoutHintLink to="/login">Login</LayoutHintLink>
      </LayoutHint>
    </LayoutContainer>
  );
};
