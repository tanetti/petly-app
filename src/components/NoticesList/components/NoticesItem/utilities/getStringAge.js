import numWords from 'num-words';

export const getStringAge = birthdate => {
  if (!birthdate) return;

  const msFrom1970andBirthdate = new Date(birthdate);
  const msFrom1970andNow = Date.now();
  const ageInMilliseconds = msFrom1970andNow - msFrom1970andBirthdate;

  const msInDay = 86400000;

  const ageInYears = Math.floor(ageInMilliseconds / (msInDay * 365));
  if (ageInYears)
    return `${numWords(ageInYears)} ${ageInYears === 1 ? 'year' : 'years'}`;

  const ageInMonths = Math.floor(ageInMilliseconds / (msInDay * 30));
  if (ageInMonths)
    return `${numWords(ageInMonths)} ${ageInMonths === 1 ? 'month' : 'months'}`;

  const ageInWeeks = Math.floor(ageInMilliseconds / (msInDay * 7));
  if (ageInWeeks)
    return `${numWords(ageInWeeks)} ${ageInWeeks === 1 ? 'week' : 'weeks'}`;

  const ageInDays = Math.floor(ageInMilliseconds / msInDay);
  if (ageInDays)
    return `${numWords(ageInDays)} ${ageInDays === 1 ? 'day' : 'days'}`;

  return 'one day';
};
