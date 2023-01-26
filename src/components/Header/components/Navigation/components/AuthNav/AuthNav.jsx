import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { standartAnimation } from 'constants/animationVariants';
import { NavLinkButtonLike } from 'components/Shared/NavLinkButtonLikeStyled';

export const AuthNav = ({ setIsMobileMenuOpened }) => (
  <motion.div
    key="notLoggedIn"
    variants={standartAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
  >
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
  </motion.div>
);

AuthNav.propTypes = {
  setIsMobileMenuOpened: PropTypes.func.isRequired,
};
