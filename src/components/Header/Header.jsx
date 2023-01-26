import { Logo, Navigation } from './components';
import { HeaderContainer } from './HeaderStyled';

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <Navigation />
      </HeaderContainer>
    </header>
  );
};
