import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { standartAnimation } from 'constants/animationVariants';
import { NavLinkButtonLike } from 'components/Shared/NavLinkButtonLikeStyled';
import { AccountIcon } from './UserNavStyled';

export const UserNav = ({ setIsMobileMenuOpened }) => (
  <motion.div
    key="loggedIn"
    variants={standartAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <NavLinkButtonLike
      to="/user"
      is_account="true"
      onClick={() => setIsMobileMenuOpened(prevState => prevState && false)}
    >
      <AccountIcon />
      Account
    </NavLinkButtonLike>
  </motion.div>
);

UserNav.propTypes = {
  setIsMobileMenuOpened: PropTypes.func.isRequired,
};
