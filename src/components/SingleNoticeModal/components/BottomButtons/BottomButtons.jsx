import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useAuth } from 'hooks';
import { useDeleteNoticeMutation } from 'redux/notices/noticesApi';
import { FavoriteButton } from 'components/Shared';
import {
  ButtonsContainer,
  ContactLink,
  DeleteButton,
  DeleteIcon,
} from './BottomButtonsStyled';
import { DeletePromptModal } from 'components/DeletePromptModal/DeletePromptModal';

export const BottomButtons = ({ noticeId, owner, title, petName }) => {
  const { _id: ownerId, phone, email } = owner;

  const [isDeletePromptModalOpened, setIsDeletePromptModalOpened] =
    useState(false);

  const [
    deleteNotice,
    { isError: isNoticeDeleteError, isLoading: isNoticeDeletting },
  ] = useDeleteNoticeMutation();

  const { userId } = useAuth();

  const contactLinkHref = phone
    ? `tel:${phone}`
    : `mailto:${email}?subject=Petly notice - ${title} (${petName})`;

  const onDeleteNotice = () => {
    deleteNotice(noticeId);
  };

  return (
    <ButtonsContainer>
      {userId === ownerId ? (
        <DeleteButton
          title="Delete notice"
          loadingPosition="end"
          endIcon={<DeleteIcon />}
          loading={isNoticeDeletting}
          onClick={() => setIsDeletePromptModalOpened(true)}
        >
          Delete
        </DeleteButton>
      ) : (
        <ContactLink href={contactLinkHref}>Contact</ContactLink>
      )}

      <FavoriteButton noticeId={noticeId} variant="modal" />

      <DeletePromptModal
        isOpened={isDeletePromptModalOpened}
        closeModal={() => setIsDeletePromptModalOpened(false)}
        action={onDeleteNotice}
        isLoading={isNoticeDeletting}
        isError={isNoticeDeleteError}
        whoWord={petName}
        fromWord="notices"
      />
    </ButtonsContainer>
  );
};

BottomButtons.propTypes = {
  noticeId: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  petName: PropTypes.string.isRequired,
};
