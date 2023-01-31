import PropTypes from 'prop-types';
import { NavLinkButtonLike } from 'components/Shared/NavLinkButtonLikeStyled';
import { AccountIcon } from './UserNavStyled';

export const UserNav = ({ setIsMobileMenuOpened }) => (
  <NavLinkButtonLike
    to="/user"
    is_account="true"
    onClick={() => setIsMobileMenuOpened(prevState => prevState && false)}
  >
    <AccountIcon />
    Account
  </NavLinkButtonLike>
);

UserNav.propTypes = {
  setIsMobileMenuOpened: PropTypes.func.isRequired,
};
