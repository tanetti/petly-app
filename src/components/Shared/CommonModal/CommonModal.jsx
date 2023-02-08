import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { Fade, useTheme } from '@mui/material';
import { backdropSlotProps } from 'theme/backdropSlotProps';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import {
  CommonProgressBar,
  CommonProgressBarContainer,
} from '../CommonProgressBarStyled';
import {
  StyledModal,
  ModalWindow,
  ContentContainer,
  ModalTitle,
  ModalWindowGradient,
  ModalCloseButton,
  CloseButtonIcon,
} from './CommonModalStyled';

export const CommonModal = ({
  title,
  isOpened,
  isActionsDisabled,
  closeModal,
  children,
}) => {
  const theme = useTheme();

  return (
    <StyledModal
      open={isOpened}
      onClose={isActionsDisabled ? null : closeModal}
      aria-labelledby="modal-title"
      closeAfterTransition
      slotProps={backdropSlotProps}
    >
      <Fade in={isOpened} timeout={theme.transitions.duration.standard}>
        <ModalWindow>
          <ModalWindowGradient />

          <ContentContainer>
            {title ? <ModalTitle>{title}</ModalTitle> : null}
            <ModalCloseButton
              title="Close window"
              aria-label="Close window"
              disabled={isActionsDisabled}
              onClick={closeModal}
            >
              <CloseButtonIcon />
            </ModalCloseButton>
            {children}
          </ContentContainer>

          <CommonProgressBarContainer>
            <AnimatePresence>
              {isActionsDisabled ? (
                <motion.div
                  variants={STANDART_ANIMATION_VARIANT}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <CommonProgressBar />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </CommonProgressBarContainer>
        </ModalWindow>
      </Fade>
    </StyledModal>
  );
};

CommonModal.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool.isRequired,
  isActionsDisabled: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
};
