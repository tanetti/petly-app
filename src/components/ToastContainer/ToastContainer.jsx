import { TOAST_AUTOCLOSE_TIMEOUT } from 'constants/timeouts';
import { StyledToastContainer } from './ToastContainerStyled';

export const ToastContainer = () => (
  <StyledToastContainer
    position="bottom-left"
    autoClose={TOAST_AUTOCLOSE_TIMEOUT}
    hideProgressBar={false}
    newestOnTop
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    draggablePercent={60}
    pauseOnHover
    theme={null}
  />
);
