import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { resetError } from 'redux/auth/authActions';
import { useAuth } from 'hooks';
import { errorCases } from 'constants/errorsCases';
import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { InputAdornment } from '@mui/material';
import { registerFirstStepValidationSchema } from 'utilities/validationSchemas';
import { AuthInput, FilledButton, AdornmentButton } from 'components/Shared';

export const FirstStep = ({
  moveForward,
  firstStepFormData,
  setFirstStepFormData,
}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordConfirmationVisibility, setPasswordConfirmationVisibility] =
    useState(false);
  const dispatch = useDispatch();
  const { userError } = useAuth();

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFirstStepValidationSchema),
    mode: userError ? 'onChange' : 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  useEffect(() => {
    if (!firstStepFormData) return;

    Object.entries(firstStepFormData).forEach(([key, value]) => {
      if (key === 'password') {
        setValue(key, value);
        setValue('passwordConfirmation', value);
      } else {
        setValue(key, value);
      }
    });
  }, [firstStepFormData, setValue]);

  useEffect(() => {
    if (
      !userError ||
      (!userError.startsWith('register-email') &&
        !userError.startsWith('register-password'))
    )
      return;

    const errorCase = errorCases[userError];
    if (!errorCase) return;
    const { field, message } = errorCase;

    setError(field, { message });
  }, [dispatch, setError, userError]);

  const onSubmit = data => {
    if (userError) dispatch(resetError());

    setFirstStepFormData(data);
    moveForward();
  };

  return (
    <form
      title="Registration"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <AuthInput
            {...field}
            title="Email address"
            label="Email"
            type="email"
            fullWidth
            autoFocus
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <AuthInput
            {...field}
            title="Password"
            label="Password"
            type={passwordVisibility ? 'text' : 'password'}
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AdornmentButton
                    tabIndex={-1}
                    title={
                      passwordVisibility
                        ? 'Turn off password visibility'
                        : 'Turn on password visibility'
                    }
                    aria-label="Switch password visibility"
                    onClick={() =>
                      setPasswordVisibility(prevState => !prevState)
                    }
                    edge="end"
                  >
                    {passwordVisibility ? (
                      <VisibilityOffRoundedIcon />
                    ) : (
                      <VisibilityRoundedIcon />
                    )}
                  </AdornmentButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Controller
        name="passwordConfirmation"
        control={control}
        render={({ field }) => (
          <AuthInput
            {...field}
            title="Confirm password"
            label="Confirm password"
            type={passwordConfirmationVisibility ? 'text' : 'password'}
            fullWidth
            error={!!errors.passwordConfirmation}
            helperText={errors.passwordConfirmation?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AdornmentButton
                    tabIndex={-1}
                    title={
                      passwordConfirmationVisibility
                        ? 'Turn off password confirmation visibility'
                        : 'Turn on password confirmation visibility'
                    }
                    aria-label="Switch password confirmation visibility"
                    onClick={() =>
                      setPasswordConfirmationVisibility(prevState => !prevState)
                    }
                    edge="end"
                  >
                    {passwordConfirmationVisibility ? (
                      <VisibilityOffRoundedIcon />
                    ) : (
                      <VisibilityRoundedIcon />
                    )}
                  </AdornmentButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <FilledButton
        title="Next step"
        fullWidth
        type="submit"
        disabled={
          !!errors.email || !!errors.password || !!errors.passwordConfirmation
        }
      >
        Next
      </FilledButton>
    </form>
  );
};

FirstStep.propTypes = {
  moveForward: PropTypes.func.isRequired,
  firstStepFormData: PropTypes.exact({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  setFirstStepFormData: PropTypes.func.isRequired,
};
