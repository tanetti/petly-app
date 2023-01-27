import PropTypes from 'prop-types';
import { Fade, useTheme } from '@mui/material';
import { backdropSlotProps } from 'theme/backdropSlotProps';
import { StyledModal, ModalWindow } from './CommonModalStyled';

export const CommonModal = ({ title, isOpened, closeModal, children }) => {
  const theme = useTheme();

  return (
    <StyledModal
      open={isOpened}
      onClose={closeModal}
      aria-labelledby="modal-title"
      closeAfterTransition
      slotProps={backdropSlotProps}
    >
      <Fade in={isOpened} timeout={theme.transitions.duration.standard}>
        <ModalWindow>
          {title ? <p>{title}</p> : null}
          <button>11</button>
          {children}
        </ModalWindow>
      </Fade>
    </StyledModal>
  );
};

CommonModal.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
