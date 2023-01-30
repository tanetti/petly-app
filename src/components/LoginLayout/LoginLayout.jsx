import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnimatePresence } from 'framer-motion';
import { InputAdornment } from '@mui/material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { makeToast } from 'utilities/makeToast';
import { loginValidationSchema } from 'utilities/validationSchemas';
import { standartAnimation } from 'constants/animationVariants';
import { errorCases } from 'constants/errorsCases';
import {
  AuthInput,
  FilledButton,
  LayoutContainer,
  LayoutHint,
  LayoutHintLink,
  LayoutTitle,
  AdornmentButton,
  AuthMotionContainer,
} from 'components/Shared';

export const LoginLayout = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const dispatch = useDispatch();
  const { isUserPending, userError } = useAuth();

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (!userError || !userError.startsWith('login')) return;

    const errorCase = errorCases[userError];
    if (!errorCase) return makeToast();

    const { field, message } = errorCase;
    setError(field, { message });
  }, [setError, userError]);

  const onSubmit = credentials => {
    dispatch(logIn(credentials));
  };

  return (
    <LayoutContainer>
      <LayoutTitle>Login</LayoutTitle>
      <AnimatePresence mode="wait">
        <AuthMotionContainer
          variants={standartAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <form
            title="Login"
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
                  disabled={isUserPending}
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
                  disabled={isUserPending}
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

            <FilledButton
              type="submit"
              disabled={isUserPending || !!errors.email || !!errors.password}
            >
              Login
            </FilledButton>
          </form>
        </AuthMotionContainer>
      </AnimatePresence>
      <LayoutHint>
        Don't have an account?&nbsp;
        <LayoutHintLink to="/register">Register</LayoutHintLink>
      </LayoutHint>
    </LayoutContainer>
  );
};
