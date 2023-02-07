import PropTypes from 'prop-types';
import { AddPetIcon, MobileButton } from './MobileAddPetButtonStyled';

export const MobileAddPetButton = ({ onButtonClick }) => (
  <MobileButton onClick={onButtonClick}>
    <AddPetIcon />
    Add pet
  </MobileButton>
);

MobileAddPetButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
