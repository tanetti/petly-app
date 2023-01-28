import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createFilterOptions } from '@mui/material';
import { registerSecondStepValidationSchema } from 'utilities/validationSchemas';
import { AuthInput, FilledButton, OutlinedButton } from 'components/Shared';
import { StyledAutocomplete } from './SecondStepStyled';
import { PhoneFormatInput } from './components/PhoneFormatInput';
import { CITIES } from 'constants/cities';

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
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSecondStepValidationSchema),
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

  const onMoveBackward = event => {
    event.preventDefault();
    setSecondStepFormData(getValues());
    moveBackward();
  };

  const onSubmit = data => {
    const registerData = { ...firstStepFormData, ...data };

    console.log(registerData);
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
            error={!!errors.phone}
            helperText={errors.phone?.message}
            InputProps={{ inputComponent: PhoneFormatInput }}
          />
        )}
      />
      <FilledButton
        type="submit"
        disabled={!!errors.name || !!errors.address || !!errors.phone}
      >
        Register
      </FilledButton>
      <OutlinedButton onClick={onMoveBackward}>Back</OutlinedButton>
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
