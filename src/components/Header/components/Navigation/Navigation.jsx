import { useState } from 'react';
import { useAuth, useScreen } from 'hooks';
import { AnimatePresence } from 'framer-motion';
import { backdropSlotProps } from 'theme/backdropSlotProps';
import { Nav, AuthNav, UserNav, MobileMenuButton } from './components';
import {
  NavigationWrapper,
  NavigationDesktopContainer,
  SwipeableMobileMenu,
} from './NavigationStyled';

export const Navigation = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const { isUserLoggedIn } = useAuth();
  const currentScreen = useScreen();

  return (
    <NavigationWrapper>
      <NavigationDesktopContainer>
        {currentScreen === 'desktop' ? (
          <Nav setIsMobileMenuOpened={setIsMobileMenuOpened} />
        ) : null}

        {currentScreen === 'tablet' || currentScreen === 'desktop' ? (
          <AnimatePresence mode="wait">
            {!isUserLoggedIn ? (
              <UserNav setIsMobileMenuOpened={setIsMobileMenuOpened} />
            ) : (
              <AuthNav setIsMobileMenuOpened={setIsMobileMenuOpened} />
            )}
          </AnimatePresence>
        ) : null}
      </NavigationDesktopContainer>

      {currentScreen === 'mobile' || currentScreen === 'tablet' ? (
        <>
          <MobileMenuButton
            isMobileMenuOpened={isMobileMenuOpened}
            setIsMobileMenuOpened={setIsMobileMenuOpened}
          />

          <SwipeableMobileMenu
            id="mobile-menu"
            anchor="right"
            slotProps={backdropSlotProps}
            open={isMobileMenuOpened}
            onOpen={() => setIsMobileMenuOpened(true)}
            onClose={() => setIsMobileMenuOpened(false)}
          >
            {currentScreen === 'mobile' && isUserLoggedIn ? (
              <UserNav setIsMobileMenuOpened={setIsMobileMenuOpened} />
            ) : null}

            {currentScreen === 'mobile' && !isUserLoggedIn ? (
              <AuthNav setIsMobileMenuOpened={setIsMobileMenuOpened} />
            ) : null}

            <Nav setIsMobileMenuOpened={setIsMobileMenuOpened} />
          </SwipeableMobileMenu>
        </>
      ) : null}
    </NavigationWrapper>
  );
};
