import PropTypes from 'prop-types';
import { CommonModal } from 'components/Shared';
import { ModalContainer, ModalTopContainer } from './SingleNoticeModalStyled';
import { NoticeAvatar } from './components';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import { AnimatePresence } from 'framer-motion';

export const SingleNoticeModal = ({ isOpened, closeModal, noticeData }) => {
  return (
    <CommonModal
      isOpened={isOpened}
      isActionsDisabled={null}
      closeModal={closeModal}
    >
      <AnimatePresence>
        {noticeData ? (
          <ModalContainer
            key="singleNoticeModal"
            variants={STANDART_ANIMATION_VARIANT}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ModalTopContainer>
              <NoticeAvatar
                avatarURL={noticeData.avatarURL}
                name={noticeData.name}
              />
            </ModalTopContainer>
          </ModalContainer>
        ) : null}
      </AnimatePresence>
    </CommonModal>
  );
};

SingleNoticeModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  noticeData: PropTypes.object,
};
