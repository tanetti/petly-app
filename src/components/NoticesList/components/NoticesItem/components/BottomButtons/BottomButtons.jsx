import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth } from 'hooks';
import { useDeleteNoticeMutation } from 'redux/notices/noticesApi';
import { useGetSingleNoticeQuery } from 'redux/singleNotice/singleNoticeApi';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import { makeToast } from 'utilities/makeToast';
import { SingleNoticeModal } from 'components/SingleNoticeModal/SingleNoticeModal';
import { DeletePromptModal } from 'components/DeletePromptModal/DeletePromptModal';
import {
  CommonProgressBar,
  CommonProgressBarContainer,
} from 'components/Shared';
import {
  ButtonContainer,
  DeleteIcon,
  NoticeButton,
} from './BottomButtonsStyled';

export const BottomButtons = ({ noticeId, ownerId, petName }) => {
  const [isDeletePromptModalOpened, setIsDeletePromptModalOpened] =
    useState(false);

  const [singleNoticeIdToLoad, setSingleNoticeIdToLoad] = useState(null);

  const { userId } = useAuth();

  const [
    deleteNotice,
    { isError: isNoticeDeleteError, isLoading: isNoticeDeletting },
  ] = useDeleteNoticeMutation();

  const {
    data: singleNoticeData,
    isFetching: isSingleNoticeFetching,
    isError: isSingleNoticeError,
    isSuccess: isSingleNoticeSuccess,
  } = useGetSingleNoticeQuery(singleNoticeIdToLoad, {
    skip: !singleNoticeIdToLoad,
  });

  const onDeleteNotice = () => {
    deleteNotice(noticeId);
  };

  useEffect(() => {
    if (!isSingleNoticeError) return;

    setSingleNoticeIdToLoad(null);
    makeToast();
  }, [isSingleNoticeError]);

  return (
    <>
      <ButtonContainer>
        <NoticeButton
          title="More pet info"
          disabled={isSingleNoticeFetching}
          onClick={() => setSingleNoticeIdToLoad(noticeId)}
        >
          Learn more
        </NoticeButton>
        {userId === ownerId ? (
          <NoticeButton
            title="Delete notice"
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

        <SingleNoticeModal
          isOpened={
            isSingleNoticeSuccess && singleNoticeData && !!singleNoticeIdToLoad
          }
          closeModal={() => setSingleNoticeIdToLoad(null)}
          noticeData={singleNoticeData}
        />
      </ButtonContainer>

      <CommonProgressBarContainer>
        <AnimatePresence>
          {isSingleNoticeFetching ? (
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
    </>
  );
};

BottomButtons.propTypes = {
  noticeId: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  petName: PropTypes.string.isRequired,
};
