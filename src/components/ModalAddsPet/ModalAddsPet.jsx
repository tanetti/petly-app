import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { Button, TextareaAutosize, TextField } from '@mui/material';
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
} from 'components/ModalAddsPet';
import { AvatarDropZone } from 'components/UserDataAndOwnPets/components/UserData/components';
import {
  DATE_REGEX,
  FILE_SIZE,
  SUPPORTED_FORMAT_GROUP,
  INITIAL_FORM_STATE,
  ONLY_LETTERS_REGEX,
  LETTERS_AND_SYMBOLS_REGEX,
} from 'constants/modalAddsPet';

export const ModalAddsPet = ({ isOpened, closeModal }) => {
  const validationSchemaFirstStep = yup.object().shape({
    name: yup
      .string()
      .required('Required *')
      .matches(ONLY_LETTERS_REGEX, 'Only English letters')
      .min(2, 'It seems too short...')
      .max(16, 'Must not exceed 16 characters'),
    date: yup
      .string()
      .required('Required *')
      .matches(DATE_REGEX, 'DD.MM.YYYY format'),
    breed: yup
      .string()
      .required('Required *')
      .matches(ONLY_LETTERS_REGEX, 'Only English letters')
      .min(2, 'It seems too short...')
      .max(16, 'Must not exceed 16 characters'),
  });

  const validationSchemaStepTwo = yup.object().shape({
    // image: yup
    //   .mixed()
    //   .required('Required *')
    //   .test(
    //     'fileType',
    //     'Invalid image file format selection',
    //     value =>
    //       value && value[0]?.type.split('/')[0] === SUPPORTED_FORMAT_GROUP
    //   )
    //   .test(
    //     'fileSize',
    //     `File must not excced ${FILE_SIZE} Mb`,
    //     value => value && value[0]?.size <= FILE_SIZE * 1000000
    //   ),
    comments: yup
      .string()
      .required('Required *')
      .matches(LETTERS_AND_SYMBOLS_REGEX, 'Only English letters and symbols')
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

  const avatarUrl = null;

  const [name, setName] = useState(INITIAL_FORM_STATE.name);
  const [date, setDate] = useState(INITIAL_FORM_STATE.date);
  const [breed, setBreed] = useState(INITIAL_FORM_STATE.breed);
  const [image, setImage] = useState(INITIAL_FORM_STATE.image);
  const [comments, setComments] = useState(INITIAL_FORM_STATE.comments);
  const [step, setStep] = useState(1);

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
            <label htmlFor="name">Name pet</label>
            <ModalInput
              id="name"
              type="text"
              name="name"
              placeholder="Type name pet"
              title="Name must be from 2 to 30 characters"
              size="small"
              helperText={errorsStepOne.name?.message}
              error={errorsStepOne.name ? true : false}
              {...registerStepOne('name')}
            />

            <label htmlFor="date">Date of birth</label>
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

            <label htmlFor="breed">Breed</label>
            <ModalInput
              id="breed"
              type="text"
              name="breed"
              placeholder="Type breed"
              title="Breed must be from 2 to 30 characters"
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
            <p>Add photo and some comments</p>
            {/* <label
              htmlFor="image"
              style={{ display: 'block', cursor: 'pointer' }}
            > */}
            {/* {image ? ( */}
            <ImageContainer>
              <AvatarDropZone
                currentAvatarUrl={image ? URL.createObjectURL(image) : null}
                setNewAvatarFile={setImage}
              />
            </ImageContainer>

            {/* ) : ( */}
            {/* // <img
                //   width={100}
                //   height={100}
                //   src={URL.createObjectURL(image)}
                //   alt="pet"
                // />
                // <img src="" alt="pet placeholder" />
              // )} */}
            {/* </label> */}
            <p>{errorsStepTwo.image?.message}</p>

            <label htmlFor="comments">Comments</label>
            <TextareaAutosize
              id="comments"
              type="text"
              name="comments"
              placeholder="Type comments"
              title="Place here your comments"
              size="small"
              // error={errorsStepTwo.comments ? true : false}
              {...registerStepTwo('comments', {
                onBlur: e => {
                  setComments(e.target.value);
                },
              })}
            />
            <p>{errorsStepTwo.comments?.message}</p>
          </Form>
        )}
        {/* <input
          form="form-two"
          id="image"
          type="file"
          name="image"
          style={{
            position: 'absolute',
            top: -9999,
            left: -9999,
            width: 0,
            height: 0,
          }}
          {...registerStepTwo('image', {
            onChange: e => {
              setImage(e.target.files[0]);
            },
          })}
        /> */}
        {step === 1 ? (
          <ButtonContainer>
            <Button type="button" variant="outlined" onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit" form="form-one" variant="outlined">
              Next
            </Button>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <Button
              type="button"
              variant="outlined"
              onClick={() => {
                setStep(1);
              }}
            >
              Back
            </Button>
            <Button type="submit" form="form-two" variant="outlined">
              Done
            </Button>
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
