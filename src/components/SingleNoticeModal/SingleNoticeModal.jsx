import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import { CommonModal, NoticeAvatar } from 'components/Shared';
import { NoticeStats } from './components';
import {
  CommentsContainer,
  ModalContainer,
  ModalTitle,
  ModalTopContainer,
} from './SingleNoticeModalStyled';

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
                categoryName={noticeData.category}
                variant="modal"
              />

              <div>
                <ModalTitle>
                  {noticeData.title.charAt(0).toUpperCase() +
                    noticeData.title.slice(1)}
                </ModalTitle>

                <NoticeStats noticeData={noticeData} />
              </div>
            </ModalTopContainer>

            {noticeData.comments ? (
              <CommentsContainer>
                <span>Comments:&nbsp;</span>
                <span>{noticeData.comments}</span>
              </CommentsContainer>
            ) : null}
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
