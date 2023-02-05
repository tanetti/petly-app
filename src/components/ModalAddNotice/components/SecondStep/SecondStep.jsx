import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Textarea,
  TextareaContainer,
  SexContainer,
  CheckboxContainer,
  CheckboxInput,
  ImageErrorLabel,
  TextareaErrorContainer,
  CommentsContainer,
  ImageContainer,
} from './SecondStepStyled';
import { AvatarDropZone } from 'components/Shared';
import { getModalAddNoticeSecondStepFormValidationSchema } from 'utilities/validationSchemas';
import { ModalForm } from './SecondStepStyled';
import { ModalLabel, ModalInput } from '../Shared';

export const SecondStep = ({
  type,
  image,
  sex,
  isImageError,
  initialLocation,
  initialPrice,
  initialComments,
  saveSexToState,
  saveLocationToState,
  savePriceToState,
  saveImageToState,
  saveCommentsToState,
  onSubmit,
}) => {
  const isSellAdType = type === 'sell';
  const ModalAddNoticeSecondStepFormValidationSchema =
    getModalAddNoticeSecondStepFormValidationSchema(isSellAdType);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      location: initialLocation,
      price: initialPrice,
      image,
      comments: initialComments,
    },
    mode: 'onChange',
    resolver: yupResolver(ModalAddNoticeSecondStepFormValidationSchema),
  });

  return (
    <ModalForm
      id="form-two"
      onSubmit={handleSubmit(data => {
        onSubmit(data, reset);
      })}
    >
      <ModalLabel htmlFor="sex">The sex</ModalLabel>
      <SexContainer>
        <CheckboxContainer>
          <CheckboxInput
            id="sex"
            type="checkbox"
            name="sex"
            title="Select sex"
            size="small"
            checked={sex === 'male'}
            className={sex === 'male' ? 'isActive' : null}
            onChange={() => {
              saveSexToState('male');
            }}
          />
          <p className={sex === 'male' ? 'isActive' : null}>Male</p>
        </CheckboxContainer>
        <CheckboxContainer>
          <CheckboxInput
            id="sex"
            type="checkbox"
            name="sex"
            title="Select sex"
            size="small"
            checked={sex === 'female'}
            className={sex === 'female' ? 'isActive' : null}
            onChange={() => {
              saveSexToState('female');
            }}
          />
          <p className={sex === 'female' ? 'isActive' : null}>Female</p>
        </CheckboxContainer>
      </SexContainer>

      <ModalLabel htmlFor="location">Location</ModalLabel>
      <ModalInput
        id="location"
        type="text"
        name="location"
        placeholder="Type location"
        title="Type your location"
        size="small"
        helperText={errors.location?.message}
        error={errors.location ? true : false}
        {...register('location', {
          onChange: e => {
            saveLocationToState(e.target.value);
          },
        })}
      />

      {isSellAdType ? (
        <>
          <ModalLabel htmlFor="price">Price</ModalLabel>
          <ModalInput
            id="price"
            type="number"
            name="price"
            placeholder="Type price"
            title="Price in dollars"
            size="small"
            helperText={errors.price?.message}
            error={errors.price ? true : false}
            {...register('price', {
              onChange: e => {
                savePriceToState(parseInt(e.target.value));
              },
            })}
          />
        </>
      ) : null}

      <ModalLabel>Load the pet's image</ModalLabel>
      <ImageContainer>
        <AvatarDropZone
          currentAvatarUrl={image ? URL.createObjectURL(image) : null}
          setNewAvatarFile={saveImageToState}
          isModalZone={true}
        />
        {isImageError && <ImageErrorLabel>Image is required</ImageErrorLabel>}
      </ImageContainer>

      <CommentsContainer>
        <ModalLabel htmlFor="comments">Comments</ModalLabel>
        <TextareaContainer>
          <Textarea
            id="comments"
            className={errors.comments ? 'isError' : null}
            type="text"
            name="comments"
            placeholder="Type comments"
            title="Place here your comments"
            size="small"
            {...register('comments', {
              onBlur: e => {
                saveCommentsToState(e.target.value);
              },
            })}
          />
          <TextareaErrorContainer
            className={errors.comments ? 'isError' : null}
          >
            {errors.comments?.message}
          </TextareaErrorContainer>
        </TextareaContainer>
      </CommentsContainer>
    </ModalForm>
  );
};

SecondStep.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.instanceOf(File),
  sex: PropTypes.string.isRequired,
  isImageError: PropTypes.bool.isRequired,
  initialLocation: PropTypes.string.isRequired,
  initialPrice: PropTypes.number,
  initialComments: PropTypes.string.isRequired,
  saveSexToState: PropTypes.func.isRequired,
  saveLocationToState: PropTypes.func.isRequired,
  savePriceToState: PropTypes.func.isRequired,
  saveImageToState: PropTypes.func.isRequired,
  saveCommentsToState: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
