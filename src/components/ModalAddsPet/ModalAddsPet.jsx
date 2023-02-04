import { useEffect, useState, useCallback } from 'react';
import { PropTypes } from 'prop-types';
import { CommonModal } from 'components/Shared';
import {
  ModalContainer,
  ButtonContainer,
  ModalFilledButton,
  ModalOutlinedButton,
} from 'components/ModalAddsPet';
import {
  FirstStepForm,
  SecondStepForm,
} from 'components/ModalAddsPet/components';

export const ModalAddsPet = ({ isOpened, closeModal }) => {
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
    data.append('date', date);
    data.append('breed', breed);
    data.append('comments', comments);
    data.append('image', image);
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
        getPetFormData();
        // axios({
        //   method: 'post',
        //   url: 'api/add-pet-route/',
        //   data: getPetFormData(),
        //   headers: { 'Content-Type': 'multipart/form-data' },
        // });
        reset();
        closeModal();
        break;
      default:
        throw new Error('Unknown form step');
    }
  };

  return (
    <CommonModal
      title="Add pet"
      isOpened={isOpened}
      isActionsDisabled={false}
      closeModal={closeModal}
    >
      <ModalContainer className={step === 1 ? 'firstStep' : 'secondStep'}>
        {step === 1 ? (
          <FirstStepForm
            initialName={name}
            initialDate={date}
            initialBreed={breed}
            onSubmit={onSubmit}
          />
        ) : (
          <SecondStepForm
            image={image}
            isImageError={isImageError}
            initialComments={comments}
            saveImageToState={setImage}
            saveCommentsToState={setComments}
            onSubmit={onSubmit}
          />
        )}

        {step === 1 ? (
          <ButtonContainer>
            <ModalOutlinedButton
              type="button"
              variant="outlined"
              onClick={closeModal}
            >
              Cancel
            </ModalOutlinedButton>
            <ModalFilledButton type="submit" form="form-one" variant="outlined">
              Next
            </ModalFilledButton>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <ModalOutlinedButton
              type="button"
              variant="outlined"
              onClick={() => {
                setStep(1);
              }}
            >
              Back
            </ModalOutlinedButton>
            <ModalFilledButton type="submit" form="form-two" variant="outlined">
              Done
            </ModalFilledButton>
          </ButtonContainer>
        )}
      </ModalContainer>
    </CommonModal>
  );
};

ModalAddsPet.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
