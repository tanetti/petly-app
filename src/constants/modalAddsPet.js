export const INITIAL_FORM_STATE = {
  name: '',
  date: '',
  breed: '',
  image: null,
  comments: '',
};

export const ONLY_LETTERS_REGEX = /^[A-Za-zа-яА-ЯёЁіїІЇ\s]+$/;

export const LETTERS_AND_SYMBOLS_REGEX =
  /^[a-zA-Zа-яА-ЯёЁіїІЇ0-9!@#№$%^&*()_=+{}|;':",.<>/?`~[\]\-\s\\]*$/;

export const DATE_REGEX =
  /^(0[1-9]|1\d|2\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
