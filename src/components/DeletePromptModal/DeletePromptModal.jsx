import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { capitalizeValue } from 'utilities/capitalizeValue';
import { makeToast } from 'utilities/makeToast';
import { CommonModal } from 'components/Shared';
import {
  ExclamationIcon,
  ModalButtonContainer,
  ModalFilledButton,
  ModalOutlinedButton,
  PromptMessage,
} from './DeletePromptModalStyled';

export const DeletePromptModal = ({
  isOpened,
  closeModal,
  action,
  isLoading,
  isError,
  whoWord,
  fromWord,
}) => {
  const [isActionInProgress, setIsActionInProgress] = useState(false);

  useEffect(() => {
    if (!isLoading && !isError) return;

    if (isLoading) return setIsActionInProgress(true);

    if (isError) {
      setIsActionInProgress(false);
      makeToast();
    }
  }, [isError, isLoading]);

  return (
    <CommonModal
      title="Are you sure?"
      isOpened={isOpened}
      isActionsDisabled={isActionInProgress}
      closeModal={closeModal}
    >
      <ExclamationIcon />

      <PromptMessage>
        Do you really want to delete
        <br />
        <span>{capitalizeValue(whoWord)}</span>
        &nbsp;from&nbsp;
        {fromWord}?
      </PromptMessage>

      <ModalButtonContainer>
        <ModalFilledButton
          title="Delete"
          type="button"
          loading={isActionInProgress}
          onClick={action}
        >
          Delete
        </ModalFilledButton>
        <ModalOutlinedButton
          title="Cancel"
          type="button"
          autoFocus
          disabled={isActionInProgress}
          onClick={closeModal}
        >
          Cancel
        </ModalOutlinedButton>
      </ModalButtonContainer>
    </CommonModal>
  );
};

DeletePromptModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  whoWord: PropTypes.string.isRequired,
  fromWord: PropTypes.string.isRequired,
};
