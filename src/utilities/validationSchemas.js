import * as yup from 'yup';
import {
  PASSWORD_PATTERN,
  ONLY_LETTERS_PATTERN,
  LETTERS_DIGITS_AND_SYMBOLS_PATTERN,
  LETTERS_AND_SYMBOLS_PATTERN,
  EMAIL_PATTERN,
} from 'constants/patterns';

yup.addMethod(yup.string, 'emailPrefixLengthCheck', function (errorMessage) {
  return this.test('email-Prefix-Length-Check', errorMessage, function (value) {
    const { path, createError } = this;

    const [prefix] = value.split('@');

    if (prefix.length < 2) {
      return createError({ path, message: errorMessage });
    }

    return true;
  });
});

yup.addMethod(
  yup.string,
  'startsWithDigitsAndLetters',
  function (errorMessage) {
    return this.test(
      'starts-With-Digits-And-Letters',
      errorMessage,
      function (value) {
        const { path, createError } = this;
        if (!value.charAt(0).match(/[A-Za-z1-9]/i)) {
          return createError({ path, message: errorMessage });
        }

        return true;
      }
    );
  }
);

yup.addMethod(yup.string, 'endsWithLetters', function (errorMessage) {
  return this.test('ends-With-Letters', errorMessage, function (value) {
    const { path, createError } = this;
    if (!value.charAt(value.length - 1).match(/[A-Za-z]/i)) {
      return createError({ path, message: errorMessage });
    }

    return true;
  });
});

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

yup.addMethod(yup.mixed, 'isAvatarEmpty', function (param, errorMessage) {
  return this.test('is-Avatar-Empty', errorMessage, function (value) {
    const { path, createError } = this;

    if (value === param) {
      return createError({ path, message: errorMessage });
    }

    return true;
  });
});

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Wrong Email format')
    .startsWithDigitsAndLetters('Wrong Email format')
    .endsWithLetters('Wrong Email format')
    .required('Enter your Email address'),

  password: yup.string().required('Enter your Password'),
});

export const registerFirstStepValidationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Wrong Email format')
    .matches(EMAIL_PATTERN, 'Wrong Email format')
    .max(63, 'Wrong Email format')
    .emailPrefixLengthCheck('Wrong Email format')
    .startsWithDigitsAndLetters('Wrong Email format')
    .endsWithLetters('Wrong Email format')
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
    .matches(ONLY_LETTERS_PATTERN, 'Must contain only letters')
    .stringLengthIfNotEmpty(2, '2 symbols minimum')
    .max(30, '30 symbols maximum'),

  address: yup.string().trim(),

  phone: yup.string().trim().phoneLengthIfNotEmpty(19, 'Invalid Phone length'),
});

export const userDataValidationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(ONLY_LETTERS_PATTERN, 'validation-user-data-name-format')
    .stringLengthIfNotEmpty(2, 'validation-user-data-name-min-length-2')
    .max(30, 'validation-user-data-name-max-length-30'),

  email: yup
    .string()
    .trim()
    .email('validation-user-data-email-format')
    .matches(EMAIL_PATTERN, 'validation-user-data-email-format')
    .emailPrefixLengthCheck('validation-user-data-email-format')
    .max(63, 'validation-user-data-email-format')
    .startsWithDigitsAndLetters('validation-user-data-email-format')
    .endsWithLetters('validation-user-data-email-format')
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
    .trim()
    .required('Please enter your pet Name')
    .matches(ONLY_LETTERS_PATTERN, 'Must contain only letters')
    .min(2, 'It seems too short...')
    .max(30, 'Must not exceed 30 characters'),
  date: yup.string().required('Please provide your pet Bithday'),
  breed: yup
    .string()
    .trim()
    .required('Please enter your pet Breed')
    .matches(LETTERS_AND_SYMBOLS_PATTERN, 'Only letters and symbols symbols')
    .min(2, 'It seems too short...')
    .max(30, 'Must not exceed 30 characters'),
});

export const ModalAddsPetSecondStepFormValidationSchema = yup.object().shape({
  comments: yup
    .string()
    .trim()
    .matches(
      LETTERS_DIGITS_AND_SYMBOLS_PATTERN,
      'Letters digits and symbols only'
    )
    .stringLengthIfNotEmpty(8, 'It seems too short...')
    .max(500, 'Must not exceed 500 characters'),
});

export const ModalAddNoticeFirstStepFormValidationSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required('Please enter Title')
    .matches(LETTERS_AND_SYMBOLS_PATTERN, 'Must contain only letters')
    .min(2, 'It seems too short...')
    .max(60, 'Must not exceed 60 characters'),

  name: yup
    .string()
    .trim()
    .required('Please enter your pet Name')
    .matches(ONLY_LETTERS_PATTERN, 'Must contain only letters')
    .min(2, 'It seems too short...')
    .max(30, 'Must not exceed 30 characters'),

  birthdate: yup.string().required('Please provide your pet Birthday'),

  breed: yup
    .string()
    .trim()
    .required('Please enter your pet Breed')
    .matches(LETTERS_AND_SYMBOLS_PATTERN, 'Must contain only letters')
    .min(2, 'It seems too short...')
    .max(30, 'Must not exceed 30 characters'),
});

export const createAddNoticeModalSecondStepFormValidationSchema =
  isCurrentCategorySell => {
    return yup.object().shape({
      sex: yup
        .string()
        .trim()
        .required('Please choose Sex of pet')
        .oneOf(['male', 'female'], 'Please choose Sex of pet'),

      location: yup.string().required('Please enter pet location'),

      price: yup.number().when([], {
        is: () => isCurrentCategorySell,
        then: yup
          .number('Must contain only integer number')
          .min(1, "Price can't be zero")
          .max(99999999, 'Too large price')
          .required('Please enter price')
          .integer('Must contain only integer number')
          .nullable(true),
        otherwise: yup.number().nullable(true),
      }),

      notice_avatar: yup.mixed().isAvatarEmpty(null, 'Image is required'),

      comments: yup
        .string()
        .trim()
        .matches(
          LETTERS_DIGITS_AND_SYMBOLS_PATTERN,
          'Letters digits and symbols only'
        )
        .stringLengthIfNotEmpty(8, 'It seems too short...')
        .max(500, 'Must not exceed 500 characters'),
    });
  };
