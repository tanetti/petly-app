import { PropTypes } from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/uk';
import { ModalAddNoticeFirstStepFormValidationSchema } from 'utilities/validationSchemas';
import { ModalForm, AdTypeContainer, TitleText } from './FirstStepStyled';
import { ModalLabel, AdTypeButton, ModalInput } from '../Shared';

export const FirstStep = ({
  type,
  title,
  saveTypeToState,
  saveTitleToState,
  initialTitle,
  initialName,
  initialDate,
  initialBreed,
  onSubmit,
}) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: initialTitle,
      name: initialName,
      date: initialDate,
      breed: initialBreed,
    },
    mode: 'onChange',
    resolver: yupResolver(ModalAddNoticeFirstStepFormValidationSchema),
  });

  const limitedText = ({ text, maxLength }) => {
    const limitedText = `${text.slice(0, maxLength)}...`;
    const isLimitExcced = text.length > maxLength;
    return isLimitExcced ? limitedText : text;
  };

  return (
    <>
      <TitleText>{limitedText({ text: title, maxLength: 48 })}</TitleText>
      <AdTypeContainer>
        <AdTypeButton
          isActive={type === 'lost/found'}
          onClick={() => {
            saveTypeToState('lost/found');
          }}
        >
          lost/found
        </AdTypeButton>
        <AdTypeButton
          isActive={type === 'in good hands'}
          onClick={() => {
            saveTypeToState('in good hands');
          }}
        >
          in good hands
        </AdTypeButton>
        <AdTypeButton
          isActive={type === 'sell'}
          onClick={() => {
            saveTypeToState('sell');
          }}
        >
          sell
        </AdTypeButton>
      </AdTypeContainer>
      <ModalForm
        id="form-one"
        onSubmit={handleSubmit(data => {
          onSubmit(data, reset);
        })}
      >
        <ModalLabel htmlFor="title">Title of ad</ModalLabel>
        <ModalInput
          id="title"
          type="text"
          name="title"
          placeholder="Type title"
          title="Title must be from 2 to 48 characters"
          size="small"
          helperText={errors.title?.message}
          error={errors.title ? true : false}
          {...register('title', {
            onChange: e => {
              saveTitleToState(e.target.value);
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
          error={errors.name ? true : false}
          {...register('name')}
        />

        <ModalLabel htmlFor="date">Date of birth</ModalLabel>
        <Controller
          name="date"
          control={control}
          render={({ field: { onChange, ...restField } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
              <DatePicker
                {...restField}
                placeholder={null}
                onChange={value => onChange(value?.toString())}
                renderInput={params => {
                  params.inputProps.readOnly = true;
                  params.inputProps.placeholder = 'Provide date of birth';

                  return (
                    <ModalInput
                      {...params}
                      id="date"
                      type="text"
                      title="Provide date of birth"
                      size="small"
                      helperText={errors.date?.message}
                      error={errors.date ? true : false}
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
          error={errors.breed ? true : false}
          {...register('breed')}
        />
      </ModalForm>
    </>
  );
};

FirstStep.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  saveTypeToState: PropTypes.func.isRequired,
  saveTitleToState: PropTypes.func.isRequired,
  initialTitle: PropTypes.string.isRequired,
  initialName: PropTypes.string.isRequired,
  initialDate: PropTypes.string.isRequired,
  initialBreed: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
