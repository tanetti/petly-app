import { motion } from 'framer-motion';
import { standartAnimation } from 'constants/animationVariants';

export const UserNav = () => (
  <motion.div
    key="loggedIn"
    variants={standartAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    LOGGED IN
  </motion.div>
);
