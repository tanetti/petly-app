import { TOAST_CASES } from 'constants/toastCases';
import { toast } from 'react-toastify';

export const makeToast = code => {
  const severity = TOAST_CASES[code]?.severity ?? 'warning';
  const message = TOAST_CASES[code]?.message ?? 'Ooops, something went wrong';

  toast[severity](message, { toastId: code ?? 'other' });
};
