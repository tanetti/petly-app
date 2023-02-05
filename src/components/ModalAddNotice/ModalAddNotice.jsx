import { useEffect, useState, useCallback } from 'react';
import { PropTypes } from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { makeToast } from 'utilities/makeToast';
import { CommonModal } from 'components/Shared';
import { standartAnimation } from 'constants/animationVariants';
import { FirstStep, SecondStep } from './components';
import {
  ModalContainer,
  ModalButtonContainer,
  ModalFilledButton,
  ModalOutlinedButton,
} from './ModalAddNoticeStyled';

export const ModalAddNotice = ({ isOpened, closeModal }) => {
  const INITIAL_FORM_STATE = {
    type: 'lost/found',
    title: '',
    name: '',
    date: '',
    breed: '',
    sex: 'male',
    location: '',
    price: 1,
    image: null,
    comments: '',
    isImageError: false,
  };

  const [type, setType] = useState(INITIAL_FORM_STATE.type);
  const [title, setTitle] = useState(INITIAL_FORM_STATE.title);
  const [name, setName] = useState(INITIAL_FORM_STATE.name);
  const [date, setDate] = useState(INITIAL_FORM_STATE.date);
  const [breed, setBreed] = useState(INITIAL_FORM_STATE.breed);
  const [sex, setSex] = useState(INITIAL_FORM_STATE.sex);
  const [location, setLocation] = useState(INITIAL_FORM_STATE.location);
  const [price, setPrice] = useState(INITIAL_FORM_STATE.price);
  const [image, setImage] = useState(INITIAL_FORM_STATE.image);
  const [comments, setComments] = useState(INITIAL_FORM_STATE.comments);
  const [step, setStep] = useState(1);
  const [isImageError, setIsImageError] = useState(
    INITIAL_FORM_STATE.isImageError
  );

  const resetFormState = useCallback(() => {
    setType(INITIAL_FORM_STATE.type);
    setTitle(INITIAL_FORM_STATE.title);
    setName(INITIAL_FORM_STATE.name);
    setDate(INITIAL_FORM_STATE.date);
    setBreed(INITIAL_FORM_STATE.breed);
    setSex(INITIAL_FORM_STATE.sex);
    setLocation(INITIAL_FORM_STATE.location);
    setPrice(INITIAL_FORM_STATE.price);
    setImage(INITIAL_FORM_STATE.image);
    setComments(INITIAL_FORM_STATE.comments);
    setIsImageError(INITIAL_FORM_STATE.isImageError);
    setStep(1);
  }, [
    INITIAL_FORM_STATE.type,
    INITIAL_FORM_STATE.title,
    INITIAL_FORM_STATE.name,
    INITIAL_FORM_STATE.date,
    INITIAL_FORM_STATE.breed,
    INITIAL_FORM_STATE.sex,
    INITIAL_FORM_STATE.location,
    INITIAL_FORM_STATE.price,
    INITIAL_FORM_STATE.image,
    INITIAL_FORM_STATE.comments,
    INITIAL_FORM_STATE.isImageError,
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
    data.append('type', type);
    data.append('title', title);
    data.append('name', name);
    data.append('birthdate', date);
    data.append('breed', breed);
    data.append('sex', sex);
    data.append('location', location);

    if (price) {
      data.append('price', price);
    }
    if (comments) {
      data.append('comments', comments);
    }

    data.append('image', image);
    return data;
  };

  const onSubmit = (data, reset) => {
    switch (step) {
      case 1:
        setTitle(data.title);
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

        finalData.forEach(data => console.log(data));

        // reset();
        // closeModal();
        break;
      default:
        makeToast();
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
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="stepOne"
              variants={standartAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <FirstStep
                type={type}
                title={title}
                saveTitleToState={setTitle}
                saveTypeToState={setType}
                initialTitle={title}
                initialName={name}
                initialDate={date}
                initialBreed={breed}
                onSubmit={onSubmit}
              />
              <ModalButtonContainer
                key="stepOneButtons"
                variants={standartAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
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
              </ModalButtonContainer>
            </motion.div>
          ) : (
            <motion.div
              key="stepTwo"
              variants={standartAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SecondStep
                type={type}
                image={image}
                sex={sex}
                isImageError={isImageError}
                initialLocation={location}
                initialPrice={price}
                initialComments={comments}
                saveSexToState={setSex}
                saveLocationToState={setLocation}
                savePriceToState={setPrice}
                saveImageToState={setImage}
                saveCommentsToState={setComments}
                onSubmit={onSubmit}
              />
              <ModalButtonContainer
                key="stepTwoButtons"
                variants={standartAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ModalFilledButton
                  type="submit"
                  form="form-two"
                  variant="outlined"
                >
                  Done
                </ModalFilledButton>
                <ModalOutlinedButton
                  type="button"
                  variant="outlined"
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  Back
                </ModalOutlinedButton>
              </ModalButtonContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </ModalContainer>
    </CommonModal>
  );
};

ModalAddNotice.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
