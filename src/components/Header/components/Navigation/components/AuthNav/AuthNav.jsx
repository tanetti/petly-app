import PropTypes from 'prop-types';
import { NavLinkButtonLike } from 'components/Shared/NavLinkButtonLikeStyled';

export const AuthNav = ({ setIsMobileMenuOpened }) => (
  <>
    <NavLinkButtonLike
      to="/login"
      onClick={() => setIsMobileMenuOpened(prevState => prevState && false)}
    >
      Login
    </NavLinkButtonLike>
    <NavLinkButtonLike
      to="/register"
      onClick={() => setIsMobileMenuOpened(prevState => prevState && false)}
    >
      Registration
    </NavLinkButtonLike>
  </>
);

AuthNav.propTypes = {
  setIsMobileMenuOpened: PropTypes.func.isRequired,
};
