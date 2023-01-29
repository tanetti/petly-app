import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnimatePresence } from 'framer-motion';
import { InputAdornment } from '@mui/material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { loginValidationSchema } from 'utilities/validationSchemas';
import { standartAnimation } from 'constants/animationVariants';
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
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

            <FilledButton
              type="submit"
              disabled={!!errors.email || !!errors.password}
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
