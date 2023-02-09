import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { capitalizeValue } from 'utilities/capitalizeValue';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import { CommonModal, NoticeAvatar } from 'components/Shared';
import { BottomButtons, NoticeStats } from './components';
import {
  CommentsContainer,
  ModalContainer,
  ModalTitle,
  ModalTopContainer,
} from './SingleNoticeModalStyled';

export const SingleNoticeModal = ({ isOpened, closeModal, noticeData }) => (
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
              <ModalTitle>{capitalizeValue(noticeData.title)}</ModalTitle>

              <NoticeStats noticeData={noticeData} />
            </div>
          </ModalTopContainer>

          {noticeData.comments ? (
            <CommentsContainer>
              <span>Comments:&nbsp;</span>
              <span>{noticeData.comments}</span>
            </CommentsContainer>
          ) : null}

          <BottomButtons
            noticeId={noticeData._id}
            owner={noticeData.owner}
            title={noticeData.title}
            petName={noticeData.name}
          />
        </ModalContainer>
      ) : null}
    </AnimatePresence>
  </CommonModal>
);

SingleNoticeModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  noticeData: PropTypes.object,
};
