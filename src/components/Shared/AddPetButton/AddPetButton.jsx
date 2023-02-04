import PropTypes from 'prop-types';
import { AddPetIcon, StyledButton } from './AddPetButtonShared';

export const AddPetButton = ({ onButtonClick }) => {
  return (
    <StyledButton title="Add pet" type="button" onClick={onButtonClick}>
      Add pet <AddPetIcon />
    </StyledButton>
  );
};

AddPetButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
