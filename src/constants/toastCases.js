export const TOAST_CASES = {
  'too-many-files': {
    message: 'Only one image allowed',
    severity: 'warning',
  },
  'file-invalid-type': {
    message: 'Wrong image file format',
    severity: 'warning',
  },
  'file-too-large': {
    message: 'Image file too large',
    severity: 'warning',
  },

  'validation-user-data-phone-length': {
    message: 'Wrong Phone length',
    severity: 'error',
  },
  'validation-user-data-email-format': {
    message: 'Wrong Email format',
    severity: 'error',
  },
  'validation-user-data-email-required': {
    message: 'Please provide an Email',
    severity: 'error',
  },
  'validation-user-data-name-min-length-2': {
    message: 'Minimal Name length - 2 symbols',
    severity: 'error',
  },
  'validation-user-data-name-max-length-30': {
    message: 'Maximal Name length - 30 symbols',
    severity: 'error',
  },

  'user-update-email-format-error': {
    message: 'Wrong Email format',
    severity: 'error',
  },
  'user-update-email-0102-error': {
    message: 'Email already in use',
    severity: 'error',
  },
};
