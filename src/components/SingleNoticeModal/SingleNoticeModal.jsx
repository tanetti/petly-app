import PropTypes from 'prop-types';
import { CommonModal } from 'components/Shared';

export const SingleNoticeModal = ({ isOpened, closeModal, noticeData }) => {
  console.log(noticeData);

  return (
    <CommonModal
      isOpened={isOpened}
      isActionsDisabled={null}
      closeModal={closeModal}
    >
      22222222222222
    </CommonModal>
  );
};

SingleNoticeModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  noticeData: PropTypes.object,
};
