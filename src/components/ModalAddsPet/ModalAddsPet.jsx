import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CommonModal } from 'components/Shared';
import {
  ModalContainer,
  Form,
  ButtonContainer,
  ImageContainer,
  ModalInput,
  Label,
  ModalFilledButton,
  ModalOutlinedButton,
  ModalStepTwoDescription,
  Textarea,
  TextareaContainer,
  ImageErrorLabel,
} from 'components/ModalAddsPet';
import { AvatarDropZone } from 'components/UserDataAndOwnPets/components/UserData/components';
import {
  DATE_REGEX,
  INITIAL_FORM_STATE,
  ONLY_LETTERS_REGEX,
  LETTERS_AND_SYMBOLS_REGEX,
} from 'constants/modalAddsPet';

export const ModalAddsPet = ({ isOpened, closeModal }) => {
  const validationSchemaFirstStep = yup.object().shape({
    name: yup
      .string()
      .required('Required *')
      .matches(ONLY_LETTERS_REGEX, 'Only letters')
      .min(2, 'It seems too short...')
      .max(16, 'Must not exceed 16 characters'),
    date: yup
      .string()
      .required('Required *')
      .matches(DATE_REGEX, 'DD.MM.YYYY format'),
    breed: yup
      .string()
      .required('Required *')
      .matches(ONLY_LETTERS_REGEX, 'Only letters')
      .min(2, 'It seems too short...')
      .max(16, 'Must not exceed 16 characters'),
  });

  const validationSchemaStepTwo = yup.object().shape({
    comments: yup
      .string()
      .required('Required *')
      .matches(LETTERS_AND_SYMBOLS_REGEX, 'Only letters and symbols')
      .min(8, 'It seems too short...')
      .max(120, 'Must not exceed 120 characters'),
  });

  const {
    register: registerStepOne,
    handleSubmit: handleSubmitStepOne,
    reset: resetStepOne,
    formState: { errors: errorsStepOne },
  } = useForm({
    defaultValues: {
      name: INITIAL_FORM_STATE.name,
      date: INITIAL_FORM_STATE.date,
      breed: INITIAL_FORM_STATE.breed,
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchemaFirstStep),
  });

  const {
    register: registerStepTwo,
    handleSubmit: handleSubmitStepTwo,
    reset: resetStepTwo,
    formState: { errors: errorsStepTwo },
  } = useForm({
    defaultValues: {
      image: INITIAL_FORM_STATE.image,
      comments: INITIAL_FORM_STATE.comments,
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchemaStepTwo),
  });

  const [name, setName] = useState(INITIAL_FORM_STATE.name);
  const [date, setDate] = useState(INITIAL_FORM_STATE.date);
  const [breed, setBreed] = useState(INITIAL_FORM_STATE.breed);
  const [image, setImage] = useState(INITIAL_FORM_STATE.image);
  const [comments, setComments] = useState(INITIAL_FORM_STATE.comments);
  const [step, setStep] = useState(1);
  const [isImageError, setIsImageError] = useState(false);

  const resetFormState = () => {
    setName(INITIAL_FORM_STATE.name);
    setDate(INITIAL_FORM_STATE.date);
    setBreed(INITIAL_FORM_STATE.breed);
    setImage(INITIAL_FORM_STATE.image);
    setComments(INITIAL_FORM_STATE.comments);
    setStep(1);
  };

  useEffect(() => {
    if (!isOpened) {
      resetFormState();
      resetStepOne();
      resetStepTwo();
    }
  }, [isOpened, resetStepOne, resetStepTwo]);

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

  const onSubmitStepOne = data => {
    setName(data.name);
    setDate(data.date);
    setBreed(data.breed);
    setStep(2);
  };

  const onSubmitStepTwo = data => {
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
    closeModal();
  };

  return (
    <CommonModal
      title="Add pet"
      isOpened={isOpened}
      isActionsDisabled={false}
      closeModal={closeModal}
    >
      <ModalContainer>
        {step === 1 ? (
          <Form
            id="form-one"
            action="#"
            onSubmit={handleSubmitStepOne(onSubmitStepOne)}
          >
            <Label htmlFor="name">Name pet</Label>
            <ModalInput
              id="name"
              type="text"
              name="name"
              placeholder="Type name pet"
              title="Name must be from 2 to 16 characters"
              size="small"
              helperText={errorsStepOne.name?.message}
              error={errorsStepOne.name ? true : false}
              {...registerStepOne('name')}
            />

            <Label htmlFor="date">Date of birth</Label>
            <ModalInput
              id="date"
              type="text"
              name="date"
              placeholder="Type date of birth"
              title="Date must be in DD.MM.YYYY format, 1900-2099 years are acceptable"
              size="small"
              {...registerStepOne('date')}
              helperText={errorsStepOne.date?.message}
              error={errorsStepOne.date ? true : false}
            />

            <Label htmlFor="breed">Breed</Label>
            <ModalInput
              id="breed"
              type="text"
              name="breed"
              placeholder="Type breed"
              title="Breed must be from 2 to 16 characters"
              size="small"
              helperText={errorsStepOne.breed?.message}
              error={errorsStepOne.breed ? true : false}
              {...registerStepOne('breed')}
            />
          </Form>
        ) : (
          <Form
            id="form-two"
            action="#"
            onSubmit={handleSubmitStepTwo(onSubmitStepTwo)}
          >
            <ModalStepTwoDescription>
              Add photo and some comments
            </ModalStepTwoDescription>
            <ImageContainer>
              <AvatarDropZone
                currentAvatarUrl={image ? URL.createObjectURL(image) : null}
                setNewAvatarFile={setImage}
              />
              {isImageError && (
                <ImageErrorLabel>Image is required *</ImageErrorLabel>
              )}
            </ImageContainer>

            <Label htmlFor="comments">Comments</Label>
            <TextareaContainer>
              <Textarea
                id="comments"
                className={errorsStepTwo.comments ? 'isError' : null}
                type="text"
                name="comments"
                placeholder="Type comments"
                title="Place here your comments"
                size="small"
                {...registerStepTwo('comments', {
                  onBlur: e => {
                    setComments(e.target.value);
                  },
                })}
              />
              <p>{errorsStepTwo.comments?.message}</p>
            </TextareaContainer>
          </Form>
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
