import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/en';
import { delayedSetFirstStepTitle } from './utilities/delayedSetFirstStepTitle';
import { ModalAddNoticeFirstStepFormValidationSchema } from 'utilities/validationSchemas';
import { ModalForm, TitleText } from './FirstStepStyled';
import { CategoryFieldset } from './components';
import {
  ModalLabel,
  ModalInput,
  ModalButtonContainer,
  ModalFilledButton,
  ModalOutlinedButton,
} from '../Shared';

export const FirstStep = ({
  moveForward,
  firstStepFormData,
  setFirstStepFormData,
  closeModal,
}) => {
  const [titleText, setTitleText] = useState('');

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: 'lost-found',
      title: '',
      name: '',
      birthdate: '',
      breed: '',
    },
    mode: 'onChange',
    resolver: yupResolver(ModalAddNoticeFirstStepFormValidationSchema),
  });

  useEffect(() => {
    if (!firstStepFormData) return;

    Object.entries(firstStepFormData).forEach(([key, value]) => {
      setValue(key, value);

      if (key !== 'title') return;

      setTitleText(value);
    });
  }, [firstStepFormData, setValue]);

  const onSubmit = data => {
    setFirstStepFormData(data);
    moveForward();
  };

  return (
    <>
      <TitleText>{titleText}</TitleText>

      <ModalForm
        title="Add notice step one"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CategoryFieldset control={control} />

        <ModalLabel htmlFor="title">Title of ad</ModalLabel>
        <ModalInput
          id="title"
          type="text"
          name="title"
          placeholder="Type title"
          title="Title must be from 2 to 60 characters"
          size="small"
          helperText={errors.title?.message}
          error={!!errors.title}
          {...register('title', {
            onChange: ({ currentTarget }) => {
              delayedSetFirstStepTitle(currentTarget.value, setTitleText);
            },
          })}
        />

        <ModalLabel htmlFor="name">Name pet</ModalLabel>
        <ModalInput
          id="name"
          type="text"
          name="name"
          placeholder="Type name pet"
          title="Name must be from 2 to 30 characters"
          size="small"
          helperText={errors.name?.message}
          error={!!errors.name}
          {...register('name')}
        />

        <ModalLabel htmlFor="birthdate">Date of birth</ModalLabel>
        <Controller
          name="birthdate"
          control={control}
          render={({ field: { onChange, value, ...restField } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
              <DatePicker
                {...restField}
                disableFuture={true}
                inputFormat="DD.MM.YYYY"
                value={value || null}
                onChange={value => onChange(value?.toString())}
                renderInput={params => {
                  params.inputProps.readOnly = true;
                  params.inputProps.placeholder = 'Provide date of birth';

                  return (
                    <ModalInput
                      {...params}
                      id="birthdate"
                      type="text"
                      title="Provide date of birth"
                      size="small"
                      helperText={errors.birthdate?.message}
                      error={!!errors.birthdate}
                    />
                  );
                }}
              />
            </LocalizationProvider>
          )}
        />

        <ModalLabel htmlFor="breed">Breed</ModalLabel>
        <ModalInput
          id="breed"
          type="text"
          name="breed"
          placeholder="Type breed"
          title="Breed must be from 2 to 30 characters"
          size="small"
          helperText={errors.breed?.message}
          error={!!errors.breed}
          {...register('breed')}
        />

        <ModalButtonContainer>
          <ModalFilledButton
            title="Next step"
            type="submit"
            disabled={
              !!errors.title ||
              !!errors.name ||
              !!errors.birthdate ||
              !!errors.breed
            }
          >
            Next
          </ModalFilledButton>
          <ModalOutlinedButton
            title="Cancel"
            type="button"
            onClick={closeModal}
          >
            Cancel
          </ModalOutlinedButton>
        </ModalButtonContainer>
      </ModalForm>
    </>
  );
};

FirstStep.propTypes = {
  moveForward: PropTypes.func.isRequired,
  firstStepFormData: PropTypes.exact({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
  }),
  setFirstStepFormData: PropTypes.func.isRequired,
};
