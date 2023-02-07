import { useState } from 'react';
import { useAuth, useScreen } from 'hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { backdropSlotProps } from 'theme/backdropSlotProps';
import { ATANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import { Nav, AuthNav, UserNav, MobileMenuButton } from './components';
import {
  NavigationWrapper,
  NavigationDesktopContainer,
  SwipeableMobileMenu,
} from './NavigationStyled';

export const Navigation = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const { isUserLoggedIn, isUserRefreshing } = useAuth();
  const currentScreen = useScreen();

  return (
    <NavigationWrapper>
      <NavigationDesktopContainer>
        {currentScreen === 'desktop' ? (
          <Nav setIsMobileMenuOpened={setIsMobileMenuOpened} />
        ) : null}

        {(currentScreen === 'tablet' || currentScreen === 'desktop') &&
        !isUserRefreshing ? (
          <AnimatePresence mode="wait">
            {isUserLoggedIn ? (
              <motion.div
                key="loggedIn"
                variants={ATANDART_ANIMATION_VARIANT}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <UserNav setIsMobileMenuOpened={setIsMobileMenuOpened} />
              </motion.div>
            ) : (
              <motion.div
                key="notLoggedIn"
                variants={ATANDART_ANIMATION_VARIANT}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <AuthNav setIsMobileMenuOpened={setIsMobileMenuOpened} />
              </motion.div>
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
            <div>
              {currentScreen === 'mobile' &&
              isUserLoggedIn &&
              !isUserRefreshing ? (
                <UserNav setIsMobileMenuOpened={setIsMobileMenuOpened} />
              ) : null}

              {currentScreen === 'mobile' &&
              !isUserLoggedIn &&
              !isUserRefreshing ? (
                <AuthNav setIsMobileMenuOpened={setIsMobileMenuOpened} />
              ) : null}
            </div>
            <Nav setIsMobileMenuOpened={setIsMobileMenuOpened} />
          </SwipeableMobileMenu>
        </>
      ) : null}
    </NavigationWrapper>
  );
};
