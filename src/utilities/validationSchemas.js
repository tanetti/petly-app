import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/patterns';

export const registerFirstStepValidationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Wrong Email format')
    .required('Enter your Email address'),

  password: yup
    .string()
    .required('Enter your Password')
    .matches(PASSWORD_PATTERN, 'Digits, big & small letters, min 8 symbols'),

  passwordConfirmation: yup
    .string()
    .required('Confirm your Password')
    .matches(PASSWORD_PATTERN, 'Digits, big & small letters, min 8 symbols')
    .oneOf([yup.ref('password'), null], 'Passwords must mutch'),
});

export const registerSecondStepValidationSchema = yup.object().shape({
  name: yup.string().trim(),

  address: yup.string().trim(),

  phone: yup.string().trim(),
});
