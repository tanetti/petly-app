import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Form,
  ImageContainer,
  Label,
  ModalStepTwoDescription,
  Textarea,
  TextareaContainer,
  ImageErrorLabel,
} from 'components/ModalAddsPet';
import { AvatarDropZone } from 'components/UserDataAndOwnPets/components/UserData/components';
import { ModalAddsPetSecondStepFormValidationSchema } from 'utilities/validationSchemas';

export const SecondStepForm = ({
  image,
  isImageError,
  initialComments,
  saveImageToState,
  saveCommentsToState,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image,
      comments: initialComments,
    },
    mode: 'onChange',
    resolver: yupResolver(ModalAddsPetSecondStepFormValidationSchema),
  });

  return (
    <Form
      id="form-two"
      action="#"
      onSubmit={handleSubmit(data => {
        onSubmit(data, reset);
      })}
    >
      <ModalStepTwoDescription>
        Add photo and some comments
      </ModalStepTwoDescription>
      <ImageContainer>
        <AvatarDropZone
          currentAvatarUrl={image ? URL.createObjectURL(image) : null}
          setNewAvatarFile={saveImageToState}
        />
        {isImageError && <ImageErrorLabel>Image is required *</ImageErrorLabel>}
      </ImageContainer>

      <Label htmlFor="comments">Comments</Label>
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
        <p>{errors.comments?.message}</p>
      </TextareaContainer>
    </Form>
  );
};

SecondStepForm.propTypes = {
  image: PropTypes.instanceOf(File),
  isImageError: PropTypes.bool.isRequired,
  initialComments: PropTypes.string.isRequired,
  saveImageToState: PropTypes.func.isRequired,
  saveCommentsToState: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
