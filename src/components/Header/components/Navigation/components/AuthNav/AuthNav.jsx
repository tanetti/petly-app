import { motion } from 'framer-motion';
import { standartAnimation } from 'constants/animationVariants';

export const AuthNav = () => (
  <motion.div
    key="notLoggedIn"
    variants={standartAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    NOT LOGGED IN
  </motion.div>
);
