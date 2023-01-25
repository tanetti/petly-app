import { useState } from 'react';
import { MobileMenuButton, Nav } from './components';
import { NavigationWrapper } from './NavigationStyled';

export const Navigation = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <NavigationWrapper>
      <Nav
        isMobileMenuOpened={isMobileMenuOpened}
        setIsMobileMenuOpened={setIsMobileMenuOpened}
      />
      <MobileMenuButton
        isMobileMenuOpened={isMobileMenuOpened}
        setIsMobileMenuOpened={setIsMobileMenuOpened}
      />
    </NavigationWrapper>
  );
};
