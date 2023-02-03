import sadBoyImage from 'images/sad-boy.webp';
import { NotPetsImg, NoOwnPetsWrapper, NotPets } from './NoOwnPetsLayoutStyled';

export const NoOwnPetsLayout = () => (
  <NoOwnPetsWrapper>
    <NotPets>You don't have any pets yet</NotPets>
    <NotPetsImg src={sadBoyImage} alt="sad" />
  </NoOwnPetsWrapper>
);
