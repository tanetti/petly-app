import PropTypes from 'prop-types';
import { NavButton, NavButtonStripe } from './MobileMenuButtonStyled';

export const MobileMenuButton = ({
  isMobileMenuOpened,
  setIsMobileMenuOpened,
}) => {
  return (
    <NavButton
      aria-hidden={true}
      isMobileMenuOpened={isMobileMenuOpened}
      onClick={() => setIsMobileMenuOpened(prevState => !prevState)}
    >
      <NavButtonStripe />
      <NavButtonStripe />
      <NavButtonStripe />
    </NavButton>
  );
};

MobileMenuButton.propTypes = {
  isMobileMenuOpened: PropTypes.bool.isRequired,
  setIsMobileMenuOpened: PropTypes.func.isRequired,
};
