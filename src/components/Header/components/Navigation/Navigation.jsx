import { useState } from 'react';
import { useAuth } from 'hooks';
import { Nav, AuthNav, UserNav, MobileMenuButton } from './components';
import { NavigationWrapper, InnerContainer } from './NavigationStyled';
import { AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const { isUserLoggedIn } = useAuth();

  return (
    <NavigationWrapper>
      <InnerContainer isMobileMenuOpened={isMobileMenuOpened}>
        <Nav
          isMobileMenuOpened={isMobileMenuOpened}
          setIsMobileMenuOpened={setIsMobileMenuOpened}
        />
        <AnimatePresence mode="wait">
          {isUserLoggedIn ? <UserNav /> : <AuthNav />}
        </AnimatePresence>
      </InnerContainer>
      <MobileMenuButton
        isMobileMenuOpened={isMobileMenuOpened}
        setIsMobileMenuOpened={setIsMobileMenuOpened}
      />
    </NavigationWrapper>
  );
};
