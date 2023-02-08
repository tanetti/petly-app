import { useEffect, useState, useCallback } from 'react';
import { PropTypes } from 'prop-types';
import { useAddOwnPetMutation } from 'redux/ownPets/ownPetsApi';
import { AnimatePresence, motion } from 'framer-motion';
import { makeToast } from 'utilities/makeToast';
import { CommonModal } from 'components/Shared';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import { FirstStep, SecondStep } from './components';
import {
  ModalContainer,
  ButtonContainer,
  ModalFilledButton,
  ModalOutlinedButton,
} from './AddOwnPetModalStyled';

export const AddOwnPetModal = ({ isOpened, closeModal }) => {
  const [
    addPet,
    {
      reset: resetAddPetHook,
      isError: isPetAddError,
      isSuccess: isPetAddedSuccess,
      isLoading: isPetAdding,
    },
  ] = useAddOwnPetMutation();

  const INITIAL_FORM_STATE = {
    name: '',
    date: '',
    breed: '',
    image: null,
    comments: '',
    isImageError: false,
  };

  const [name, setName] = useState(INITIAL_FORM_STATE.name);
  const [date, setDate] = useState(INITIAL_FORM_STATE.date);
  const [breed, setBreed] = useState(INITIAL_FORM_STATE.breed);
  const [image, setImage] = useState(INITIAL_FORM_STATE.image);
  const [comments, setComments] = useState(INITIAL_FORM_STATE.comments);
  const [step, setStep] = useState(1);
  const [isImageError, setIsImageError] = useState(
    INITIAL_FORM_STATE.isImageError
  );

  const resetFormState = useCallback(() => {
    setName(INITIAL_FORM_STATE.name);
    setDate(INITIAL_FORM_STATE.date);
    setBreed(INITIAL_FORM_STATE.breed);
    setImage(INITIAL_FORM_STATE.image);
    setComments(INITIAL_FORM_STATE.comments);
    setIsImageError(INITIAL_FORM_STATE.isImageError);
    setStep(1);
  }, [
    INITIAL_FORM_STATE.breed,
    INITIAL_FORM_STATE.comments,
    INITIAL_FORM_STATE.date,
    INITIAL_FORM_STATE.image,
    INITIAL_FORM_STATE.isImageError,
    INITIAL_FORM_STATE.name,
  ]);

  useEffect(() => {
    if (!isPetAddError && !isPetAddedSuccess) return;

    if (isPetAddedSuccess) {
      resetAddPetHook();
      closeModal();

      return;
    }

    if (isPetAddError) {
      resetAddPetHook();
      makeToast();

      return;
    }
  });

  useEffect(() => {
    if (!isOpened) {
      resetFormState();
    }
  }, [isOpened, resetFormState]);

  useEffect(() => {
    if (image) {
      setIsImageError(false);
    }
  }, [image]);

  const getPetFormData = () => {
    const data = new FormData();
    data.append('name', name);
    data.append('birthdate', date);
    data.append('breed', breed);

    if (comments) {
      data.append('comments', comments);
    }

    data.append('pet_avatar', image);
    return data;
  };

  const onSubmit = (data, reset) => {
    switch (step) {
      case 1:
        setName(data.name);
        setDate(data.date);
        setBreed(data.breed);
        reset();
        setStep(2);
        break;
      case 2:
        if (!image) {
          return setIsImageError(true);
        }

        setComments(data.comments);
        const finalData = getPetFormData();

        addPet(finalData);
        break;
      default:
        makeToast();
    }
  };

  return (
    <CommonModal
      title="Add pet"
      isOpened={isOpened}
      isActionsDisabled={isPetAdding}
      closeModal={closeModal}
    >
      <ModalContainer className={step === 1 ? 'firstStep' : 'secondStep'}>
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="stepOne"
              variants={STANDART_ANIMATION_VARIANT}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <FirstStep
                initialName={name}
                initialDate={date}
                initialBreed={breed}
                onSubmit={onSubmit}
              />
              <ButtonContainer>
                <ModalFilledButton
                  type="submit"
                  form="form-one"
                  variant="outlined"
                >
                  Next
                </ModalFilledButton>
                <ModalOutlinedButton
                  type="button"
                  variant="outlined"
                  onClick={closeModal}
                >
                  Cancel
                </ModalOutlinedButton>
              </ButtonContainer>
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
                image={image}
                isImageError={isImageError}
                initialComments={comments}
                saveImageToState={setImage}
                saveCommentsToState={setComments}
                onSubmit={onSubmit}
                isPetAdding={isPetAdding}
              />
              <ButtonContainer>
                <ModalFilledButton
                  type="submit"
                  form="form-two"
                  variant="outlined"
                  loading={isPetAdding}
                >
                  Done
                </ModalFilledButton>
                <ModalOutlinedButton
                  type="button"
                  variant="outlined"
                  disabled={isPetAdding}
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  Back
                </ModalOutlinedButton>
              </ButtonContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </ModalContainer>
    </CommonModal>
  );
};

AddOwnPetModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
