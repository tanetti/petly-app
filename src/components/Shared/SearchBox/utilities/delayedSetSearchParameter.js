import debounce from 'lodash.debounce';
import { SEARCH_TRIGGER_DELAY } from 'constants/dalays';

export const delayedSetSearchParameter = debounce(
  (value, setValue, setSpinning) => {
    setValue(value ? { search: value } : {});

    setSpinning && setSpinning(false);
  },
  SEARCH_TRIGGER_DELAY
);
