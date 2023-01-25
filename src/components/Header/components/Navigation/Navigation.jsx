import { useState, useEffect, useRef } from 'react';
import { useAuth } from 'hooks';
import { Nav, AuthNav, UserNav, MobileMenuButton } from './components';
import {
  NavigationWrapper,
  NavigationInnerContainer,
} from './NavigationStyled';
import { AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const navigationInnerContainerRef = useRef(null);
  const { isUserLoggedIn } = useAuth();

  useEffect(() => {
    if (!isMobileMenuOpened) return;

    navigationInnerContainerRef.current.focus();
  }, [isMobileMenuOpened]);

  return (
    <NavigationWrapper>
      <NavigationInnerContainer
        isMobileMenuOpened={isMobileMenuOpened}
        tabIndex={isMobileMenuOpened ? '0' : '-1'}
        ref={navigationInnerContainerRef}
      >
        <Nav
          isMobileMenuOpened={isMobileMenuOpened}
          setIsMobileMenuOpened={setIsMobileMenuOpened}
        />
        <div>
          <AnimatePresence mode="wait">
            {isUserLoggedIn ? (
              <UserNav setIsMobileMenuOpened={setIsMobileMenuOpened} />
            ) : (
              <AuthNav setIsMobileMenuOpened={setIsMobileMenuOpened} />
            )}
          </AnimatePresence>
        </div>
      </NavigationInnerContainer>
      <MobileMenuButton
        isMobileMenuOpened={isMobileMenuOpened}
        setIsMobileMenuOpened={setIsMobileMenuOpened}
      />
    </NavigationWrapper>
  );
};
