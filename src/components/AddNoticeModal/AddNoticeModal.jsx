import { PropTypes } from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAddNoticeMutation } from 'redux/notices/noticesApi';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import { FirstStep, SecondStep } from './components';
import { CommonModal } from 'components/Shared';
import { ModalContainer } from './AddNoticeModalStyled';
import { makeToast } from 'utilities/makeToast';

export const AddNoticeModal = ({ isOpened, closeModal }) => {
  const [
    addNotice,
    {
      reset: resetAddNoticeHook,
      error: isNoticeAddError,
      isSuccess: isNoticeAdded,
      isLoading: isNoticeAdding,
    },
  ] = useAddNoticeMutation();

  const [isOnTheFirstStep, setIsOnTheFirstStep] = useState(true);
  const [firstStepFormData, setFirstStepFormData] = useState(null);
  const [secondStepFormData, setSecondStepFormData] = useState(null);

  const onModalClose = useCallback(() => {
    setFirstStepFormData(null);
    setSecondStepFormData(null);
    setIsOnTheFirstStep(true);
    resetAddNoticeHook();
    closeModal();
  }, [closeModal, resetAddNoticeHook]);

  useEffect(() => {
    if (!isNoticeAdded && !isNoticeAddError) return;

    if (isNoticeAdded) onModalClose();

    if (isNoticeAddError) {
      makeToast();
      resetAddNoticeHook();
    }
  }, [onModalClose, isNoticeAddError, isNoticeAdded, resetAddNoticeHook]);

  return (
    <CommonModal
      title="Add pet"
      isOpened={isOpened}
      isActionsDisabled={isNoticeAdding}
      closeModal={onModalClose}
    >
      <ModalContainer className={isOnTheFirstStep ? 'firstStep' : 'secondStep'}>
        <AnimatePresence mode="wait">
          {isOnTheFirstStep ? (
            <motion.div
              key="stepOne"
              variants={STANDART_ANIMATION_VARIANT}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <FirstStep
                moveForward={() => setIsOnTheFirstStep(false)}
                firstStepFormData={firstStepFormData}
                setFirstStepFormData={setFirstStepFormData}
                closeModal={onModalClose}
              />
            </motion.div>
          ) : (
            <motion.div
              key="stepTwo"
              variants={STANDART_ANIMATION_VARIANT}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SecondStep
                moveBackward={() => setIsOnTheFirstStep(true)}
                firstStepFormData={firstStepFormData}
                secondStepFormData={secondStepFormData}
                setSecondStepFormData={setSecondStepFormData}
                addNotice={addNotice}
                isNoticeAdding={isNoticeAdding}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </ModalContainer>
    </CommonModal>
  );
};

AddNoticeModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
