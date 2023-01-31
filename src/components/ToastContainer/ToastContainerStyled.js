import { styled } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    min-height: 48px;
    margin: 0;
    margin-top: 20px;

    border-radius: 40px;

    &--success {
      background-color: ${({ theme }) => theme.palette.success.light};
    }

    &--error {
      background-color: ${({ theme }) => theme.palette.error.main};
    }

    &--warning {
      background-color: ${({ theme }) => theme.palette.warning.main};
    }

    &--info {
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  .Toastify__toast-body {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.text.white};
  }

  .Toastify__toast-icon > svg {
    fill: ${({ theme }) => theme.palette.background.light};
  }

  .Toastify__close-button {
    display: flex;
    align-items: center;
    align-self: center;

    & > svg {
      width: 24px;
      height: 24px;

      fill: ${({ theme }) => theme.palette.semiTransparentBlack.main};
    }
  }

  .Toastify__progress-bar {
    &--error {
      background-color: ${({ theme }) => theme.palette.error.light};
    }

    &--success {
      background-color: ${({ theme }) => theme.palette.success.main};
    }

    &--warning {
      background-color: ${({ theme }) => theme.palette.warning.light};
    }

    &--info {
      background-color: ${({ theme }) => theme.palette.info.light};
    }
  }
`;
