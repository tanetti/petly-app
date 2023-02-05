import * as yup from 'yup';
import {
  PASSWORD_PATTERN,
  ONLY_LETTERS_PATTERN,
  LETTERS_DIGITS_AND_SYMBOLS_PATTERN,
  LETTERS_AND_COMMA_PATTERN,
} from 'constants/patterns';

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

export const userDataValidationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .stringLengthIfNotEmpty(2, 'validation-user-data-name-min-length-2')
    .max(30, 'validation-user-data-name-max-length-30'),

  email: yup
    .string()
    .trim()
    .email('validation-user-data-email-format')
    .required('validation-user-data-email-required'),

  birthday: yup.string().trim(),

  phone: yup
    .string()
    .trim()
    .phoneLengthIfNotEmpty(19, 'validation-user-data-phone-length'),

  address: yup.string().trim(),
});

export const ModalAddsPetFirstStepFormValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter your pet Name')
    .matches(ONLY_LETTERS_PATTERN, 'Must contain only letters')
    .min(2, 'It seems too short...')
    .max(30, 'Must not exceed 30 characters'),
  date: yup.string().required('Please provide your pet Bithday'),
  breed: yup
    .string()
    .required('Please enter your pet Breed')
    .matches(ONLY_LETTERS_PATTERN, 'Must contain only letters')
    .min(2, 'It seems too short...')
    .max(30, 'Must not exceed 30 characters'),
});

export const ModalAddsPetSecondStepFormValidationSchema = yup.object().shape({
  comments: yup
    .string()
    .matches(LETTERS_DIGITS_AND_SYMBOLS_PATTERN, 'Letters and symbols only')
    .stringLengthIfNotEmpty(8, 'It seems too short...')
    .max(500, 'Must not exceed 500 characters'),
});

export const ModalAddNoticeFirstStepFormValidationSchema = yup.object().shape({
  title: yup
    .string()
    .required('Please enter title of ad')
    .matches(ONLY_LETTERS_PATTERN, 'Must contain only letters')
    .min(2, 'It seems too short...')
    .max(48, 'Must not exceed 48 characters'),
  name: yup
    .string()
    .required('Please enter your pet Name')
    .matches(ONLY_LETTERS_PATTERN, 'Must contain only letters')
    .min(2, 'It seems too short...')
    .max(30, 'Must not exceed 30 characters'),
  date: yup.string().required('Please provide your pet Bithday'),
  breed: yup
    .string()
    .required('Please enter your pet Breed')
    .matches(ONLY_LETTERS_PATTERN, 'Must contain only letters')
    .min(2, 'It seems too short...')
    .max(30, 'Must not exceed 30 characters'),
});

export const getModalAddNoticeSecondStepFormValidationSchema = isSellAdType => {
  return yup.object().shape({
    location: yup
      .string()
      .required('Please enter your location')
      .matches(LETTERS_AND_COMMA_PATTERN, 'Must contain only letters'),
    price: yup.number().when([], {
      is: () => isSellAdType,
      then: yup
        .number('Must contain only integer number')
        .min(1, "Price can't be zero")
        .max(999999, 'Too large price')
        .required('Please enter price')
        .integer('Must contain only integer number'),
      otherwise: yup.number(),
    }),
  });
};
