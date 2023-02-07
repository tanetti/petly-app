import { PropTypes } from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Textarea,
  TextareaContainer,
  TextareaErrorContainer,
  CommentsContainer,
  ImageContainer,
  StyledAutocomplete,
  ImageErrorContainer,
} from './SecondStepStyled';
import { AvatarDropZone } from 'components/Shared';
import { createAddNoticeModalSecondStepFormValidationSchema } from 'utilities/validationSchemas';
import { ModalForm } from './SecondStepStyled';
import {
  ModalLabel,
  ModalInput,
  ModalButtonContainer,
  ModalFilledButton,
  ModalOutlinedButton,
} from '../Shared';
import { useEffect } from 'react';
import { PriceFormatInput, SexFieldset } from './components';
import { createFilterOptions, InputAdornment } from '@mui/material';
import { CITIES } from 'constants/cities';
import { useGetCurrentInfoQuery } from 'redux/currentUserInfo/currentUserInfoApi';
import { standartAnimation } from 'constants/animationVariants';
import { AnimatePresence } from 'framer-motion';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  trim: true,
});

export const SecondStep = ({
  moveBackward,
  firstStepFormData,
  secondStepFormData,
  setSecondStepFormData,
  addNotice,
  isNoticeAdding,
}) => {
  const { data: currentUserInfo } = useGetCurrentInfoQuery();
  const isCurrentCategorySell = firstStepFormData.category === 'sell';

  const {
    register,
    control,
    setValue,
    getValues,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sex: '',
      location: currentUserInfo?.address ?? '',
      price: null,
      notice_avatar: null,
      comments: '',
    },
    mode: 'onChange',
    resolver: yupResolver(
      createAddNoticeModalSecondStepFormValidationSchema(isCurrentCategorySell)
    ),
  });

  const onMoveBackward = () => {
    setSecondStepFormData(getValues());
    moveBackward();
  };

  const onSubmit = data => {
    const noticeData = new FormData();

    Object.entries(firstStepFormData).forEach(([key, value]) => {
      if (!value) return;

      noticeData.append(key, value);
    });

    Object.entries(data).forEach(([key, value]) => {
      if (!value) return;

      noticeData.append(key, value);
    });

    addNotice(noticeData);
  };

  useEffect(() => {
    if (!currentUserInfo) return;

    const currentLocationValue = getValues().location;

    if (currentLocationValue) return;

    setValue('location', currentUserInfo.address);
  });

  useEffect(() => {
    if (!secondStepFormData) return;

    Object.entries(secondStepFormData).forEach(([key, value]) =>
      setValue(key, value)
    );
  }, [secondStepFormData, setValue]);

  const avatarFormState = watch('notice_avatar');

  return (
    <ModalForm
      title="Add notice step two"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <SexFieldset
        control={control}
        error={errors.sex}
        isDisabled={isNoticeAdding}
      />

      <ModalLabel htmlFor="location">Location</ModalLabel>
      <Controller
        name="location"
        control={control}
        render={({ field: { onChange, value } }) => (
          <StyledAutocomplete
            disablePortal={false}
            selectOnFocus={false}
            autoComplete={true}
            autoHighlight={true}
            noOptionsText="No city was found"
            openText="Open city list"
            clearText="Clear"
            value={value || null}
            filterOptions={filterOptions}
            options={CITIES}
            isOptionEqualToValue={(option, value) => option === value}
            onChange={(_, field) => onChange(field ?? '')}
            renderInput={params => (
              <ModalInput
                {...params}
                id="location"
                type="text"
                placeholder="Type location"
                title="Type your location"
                size="small"
                disabled={isNoticeAdding}
                helperText={errors.location?.message}
                error={!!errors.location}
              />
            )}
          />
        )}
      />

      {isCurrentCategorySell ? (
        <>
          <ModalLabel htmlFor="price">Price</ModalLabel>
          <Controller
            name="price"
            control={control}
            render={({ field: props }) => (
              <ModalInput
                id="price"
                type="tel"
                placeholder="Type price"
                title="Price in UAH"
                size="small"
                {...props}
                disabled={isNoticeAdding}
                error={!!errors.price}
                helperText={errors.price?.message}
                InputProps={{
                  inputComponent: PriceFormatInput,
                  endAdornment: (
                    <InputAdornment position="end">UAH</InputAdornment>
                  ),
                }}
              />
            )}
          />
        </>
      ) : null}

      <ModalLabel htmlFor="avatar">Load the pet's image</ModalLabel>
      <ImageContainer>
        <AvatarDropZone
          currentAvatarUrl={
            avatarFormState ? URL.createObjectURL(avatarFormState) : null
          }
          setNewAvatarFile={image => {
            setValue('notice_avatar', image);
            trigger();
          }}
          isDisabled={isNoticeAdding}
          variant="notice"
        />

        <AnimatePresence>
          {!!errors.notice_avatar && (
            <ImageErrorContainer
              key="sexError"
              variants={standartAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {errors.notice_avatar?.message}
            </ImageErrorContainer>
          )}
        </AnimatePresence>
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
            disabled={isNoticeAdding}
            size="small"
            {...register('comments')}
          />

          <AnimatePresence>
            {!!errors.comments && (
              <TextareaErrorContainer
                key="sexError"
                variants={standartAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {errors.comments?.message}
              </TextareaErrorContainer>
            )}
          </AnimatePresence>
        </TextareaContainer>
      </CommentsContainer>

      <ModalButtonContainer>
        <ModalFilledButton
          type="submit"
          title="Done"
          loading={isNoticeAdding}
          disabled={
            !!errors.comments ||
            !!errors.notice_avatar ||
            !!errors.price ||
            !!errors.location ||
            !!errors.sex
          }
        >
          Done
        </ModalFilledButton>
        <ModalOutlinedButton
          title="Back"
          type="button"
          onClick={onMoveBackward}
        >
          Back
        </ModalOutlinedButton>
      </ModalButtonContainer>
    </ModalForm>
  );
};

SecondStep.propTypes = {
  moveBackward: PropTypes.func.isRequired,
  firstStepFormData: PropTypes.exact({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
  }).isRequired,
  secondStepFormData: PropTypes.exact({
    sex: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number,
    notice_avatar: PropTypes.instanceOf(File),
    comments: PropTypes.string.isRequired,
  }),
  setSecondStepFormData: PropTypes.func.isRequired,
  addNotice: PropTypes.func.isRequired,
  isNoticeAdding: PropTypes.bool,
};
