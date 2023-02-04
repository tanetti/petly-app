import debounce from 'lodash.debounce';
import { SEARCH_TRIGGER_DELAY } from 'constants/dalays';

export const delayedSetSearchParameter = debounce(
  (value, setValue, setSpinning) => {
    const trimmedValue = value.trim();

    setValue(trimmedValue ? { search: trimmedValue } : {});

    setSpinning && setSpinning(false);
  },
  SEARCH_TRIGGER_DELAY
);
