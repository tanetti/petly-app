import PropTypes from 'prop-types';
import { Fade, useTheme } from '@mui/material';
import { backdropSlotProps } from 'theme/backdropSlotProps';
import {
  StyledModal,
  ModalWindow,
  ContentContainer,
  ModalTitle,
  ModalWindowGradient,
  ModalCloseButton,
} from './CommonModalStyled';

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
          <ModalWindowGradient />
          <ContentContainer>
            {title ? <ModalTitle>{title}</ModalTitle> : null}
            <ModalCloseButton>1</ModalCloseButton>
            {children}
          </ContentContainer>
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
