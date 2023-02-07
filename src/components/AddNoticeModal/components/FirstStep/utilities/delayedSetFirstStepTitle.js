import debounce from 'lodash.debounce';
import { NOTICE_TITLE_SET_DELAY } from 'constants/dalays';

export const delayedSetFirstStepTitle = debounce(
  (value, setTitle) => setTitle(value),
  NOTICE_TITLE_SET_DELAY
);
