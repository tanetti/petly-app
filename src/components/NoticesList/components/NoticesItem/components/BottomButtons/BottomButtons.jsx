import PropTypes from 'prop-types';
import { useDeleteNoticeMutation } from 'redux/notices/noticesApi';
import { useAuth } from 'hooks';
import { DeletePromptModal } from 'components/DeletePromptModal/DeletePromptModal';
import {
  ButtonContainer,
  DeleteIcon,
  NoticeButton,
} from './BottomButtonsStyled';
import { useState } from 'react';

export const BottomButtons = ({ noticeId, ownerId, petName }) => {
  const [isDeletePromptModalOpened, setIsDeletePromptModalOpened] =
    useState(false);
  const { userId } = useAuth();
  const [
    deleteNotice,
    { isError: isNoticeDeleteError, isLoading: isNoticeDeletting },
  ] = useDeleteNoticeMutation();

  const onDeleteNotice = () => {
    deleteNotice(noticeId);
  };

  return (
    <ButtonContainer>
      <NoticeButton>Learn more</NoticeButton>
      {userId === ownerId ? (
        <NoticeButton
          loadingPosition="end"
          endIcon={<DeleteIcon />}
          loading={isNoticeDeletting}
          onClick={() => setIsDeletePromptModalOpened(true)}
        >
          Delete
        </NoticeButton>
      ) : null}

      <DeletePromptModal
        isOpened={isDeletePromptModalOpened}
        closeModal={() => setIsDeletePromptModalOpened(false)}
        action={onDeleteNotice}
        isLoading={isNoticeDeletting}
        isError={isNoticeDeleteError}
        whoWord={petName}
        fromWord="notices"
      />
    </ButtonContainer>
  );
};

BottomButtons.propTypes = {
  noticeId: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  petName: PropTypes.string.isRequired,
};
