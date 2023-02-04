export const PASSWORD_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const ONLY_LETTERS_PATTERN = /^[A-Za-zа-яА-ЯёЁіїІЇ\s]+$/;

export const LETTERS_AND_SYMBOLS_PATTERN =
  /^[a-zA-Zа-яА-ЯёЁіїІЇ0-9!@#№$%^&*()_=+{}|;':",.<>/?`~[\]\-\s\\]*$/;

export const DATE_PATTERN =
  /^(0[1-9]|1\d|2\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
