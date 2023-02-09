export const EMAIL_PATTERN = /^[A-Za-z0-9@._-\s]+$/;

export const PASSWORD_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const ONLY_LETTERS_PATTERN = /^[A-Za-zа-яА-ЯёЁіїІЇґҐ'`'\s]+$/;

export const LETTERS_AND_SYMBOLS_PATTERN =
  /^[A-Za-zа-яА-ЯёЁіїІЇґҐ()_'",-.'`\s]+$/;

export const LETTERS_DIGITS_AND_SYMBOLS_PATTERN =
  /^[a-zA-Zа-яА-ЯёЁіїІЇґҐ0-9!@#№$%^&*()_=+{}|;':",.<>/?`'~[\]\-\s\\]*$/;
