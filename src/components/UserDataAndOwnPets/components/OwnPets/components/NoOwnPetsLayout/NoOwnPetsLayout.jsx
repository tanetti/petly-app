import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import sadBoyImage from 'images/sad-boy.webp';
import { NotPetsImg, NoOwnPetsWrapper, NotPets } from './NoOwnPetsLayoutStyled';

export const NoOwnPetsLayout = () => (
  <NoOwnPetsWrapper
    key="noOwnPetsLayout"
    variants={STANDART_ANIMATION_VARIANT}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <NotPets>You don't have any pets yet</NotPets>
    <NotPetsImg src={sadBoyImage} alt="sad" />
  </NoOwnPetsWrapper>
);
