import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn, registerUser } from 'redux/auth/authOperations';
import { resetWasRegistered } from 'redux/auth/authActions';
import { useAuth } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { createFilterOptions } from '@mui/material';
import { registerSecondStepValidationSchema } from 'utilities/validationSchemas';
import { AuthInput, FilledButton, OutlinedButton } from 'components/Shared';
import { makeToast } from 'utilities/makeToast';
import { CITIES } from 'constants/cities';
import { errorCases } from 'constants/errorsCases';
import { StyledAutocomplete } from './SecondStepStyled';
import { PhoneFormatInput } from './components/PhoneFormatInput';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  trim: true,
});

export const SecondStep = ({
  moveBackward,
  firstStepFormData,
  secondStepFormData,
  setSecondStepFormData,
}) => {
  const dispatch = useDispatch();
  const { isUserPending, wasRegistered, userError } = useAuth();

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSecondStepValidationSchema),
    mode: userError ? 'onChange' : 'onSubmit',
    defaultValues: {
      name: '',
      address: '',
      phone: '',
    },
  });

  useEffect(() => {
    if (!secondStepFormData) return;

    Object.entries(secondStepFormData).forEach(([key, value]) =>
      setValue(key, value)
    );
  }, [firstStepFormData, secondStepFormData, setValue]);

  useEffect(() => {
    if (!userError || !userError.startsWith('register')) return;

    if (
      userError.startsWith('register-email') ||
      userError.startsWith('register-password')
    ) {
      setSecondStepFormData(getValues());
      moveBackward();
    }

    const errorCase = errorCases[userError];
    if (!errorCase) return makeToast();

    const { field, message } = errorCase;
    setError(field, { type: 'min', message });
  }, [getValues, moveBackward, setError, setSecondStepFormData, userError]);

  useEffect(() => {
    if (!wasRegistered) return;

    const { email, password } = firstStepFormData;

    dispatch(logIn({ email, password }));
    dispatch(resetWasRegistered());
  });

  const onMoveBackward = event => {
    event.preventDefault();
    setSecondStepFormData(getValues());
    moveBackward();
  };

  const onSubmit = data => {
    let filteredSecondStepData = {};

    Object.entries(data).forEach(([key, value]) => {
      if (!value) return;

      filteredSecondStepData[key] = value;
    });

    const registerData = { ...firstStepFormData, ...filteredSecondStepData };

    dispatch(registerUser(registerData));
  };

  return (
    <form
      title="Registration"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <AuthInput
            {...field}
            title="User name"
            label="Name"
            type="text"
            fullWidth
            autoFocus
            disabled={isUserPending}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="address"
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
              <AuthInput
                {...params}
                title="City, region"
                label="City, region"
                type="text"
                fullWidth
                disabled={isUserPending}
                error={!!errors.address}
                helperText={errors.address?.message}
              />
            )}
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <AuthInput
            {...field}
            title="Mobile phone"
            label="Mobile phone"
            type="text"
            fullWidth
            disabled={isUserPending}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            InputProps={{ inputComponent: PhoneFormatInput }}
          />
        )}
      />
      <FilledButton
        type="submit"
        disabled={
          isUserPending || !!errors.name || !!errors.address || !!errors.phone
        }
      >
        Register
      </FilledButton>
      <OutlinedButton
        type="button"
        disabled={isUserPending}
        onClick={onMoveBackward}
      >
        Back
      </OutlinedButton>
    </form>
  );
};

SecondStep.propTypes = {
  moveBackward: PropTypes.func.isRequired,
  firstStepFormData: PropTypes.exact({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  secondStepFormData: PropTypes.exact({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
  setSecondStepFormData: PropTypes.func.isRequired,
};
