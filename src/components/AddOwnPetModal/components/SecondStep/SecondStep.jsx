import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ModalStepTwoDescription,
  Textarea,
  TextareaContainer,
  ImageErrorLabel,
  TextareaErrorContainer,
  CommentsContainer,
  ImageContainer,
} from './SecondStepStyled';
import { AvatarDropZone } from 'components/Shared';
import { ModalAddsPetSecondStepFormValidationSchema } from 'utilities/validationSchemas';
import { ModalForm } from './SecondStepStyled';
import { ModalLabel } from '../Shared';

export const SecondStep = ({
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
    <ModalForm
      id="form-two"
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
  image: PropTypes.instanceOf(File),
  isImageError: PropTypes.bool.isRequired,
  initialComments: PropTypes.string.isRequired,
  saveImageToState: PropTypes.func.isRequired,
  saveCommentsToState: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
