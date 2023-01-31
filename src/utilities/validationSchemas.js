import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/patterns';

yup.addMethod(
  yup.string,
  'stringLengthIfNotEmpty',
  function (param, errorMessage) {
    return this.test(
      'string-Length-If-Not-Empty',
      errorMessage,
      function (value) {
        const { path, createError } = this;

        if (value.length > 0 && value.length < param) {
          return createError({ path, message: errorMessage });
        }

        return true;
      }
    );
  }
);

yup.addMethod(
  yup.string,
  'phoneLengthIfNotEmpty',
  function (param, errorMessage) {
    return this.test(
      'phone-Length-If-Not-Empty',
      errorMessage,
      function (value) {
        const { path, createError } = this;

        if (value.length > 5 && value.length < param) {
          return createError({ path, message: errorMessage });
        }

        return true;
      }
    );
  }
);

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Wrong Email format')
    .required('Enter your Email address'),

  password: yup.string().required('Enter your Password'),
});

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
  name: yup
    .string()
    .trim()
    .stringLengthIfNotEmpty(2, '2 symbols minimum')
    .max(30, '30 symbols maximum'),

  address: yup.string().trim(),

  phone: yup.string().trim().phoneLengthIfNotEmpty(19, 'Invalid Phone length'),
});
