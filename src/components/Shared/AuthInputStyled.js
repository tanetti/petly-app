import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const AuthInput = styled(TextField)`
  position: relative;

  font-family: 'Manrope';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 18px;
    line-height: 1.39;
  }

  & .MuiInputBase-root {
    height: 40px;

    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;

    border-radius: 40px;

    background-color: ${({ theme }) => theme.palette.background.dark};

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      height: 52px;
    }
  }

  & .MuiInputBase-root:hover fieldset {
    border-color: ${({ theme }) => theme.palette.accent.main};
  }

  & fieldset {
    padding-left: 32px;

    border-radius: 40px;

    border-color: ${({ theme }) => theme.palette.accent.light};

    transition: ${({ theme }) =>
      theme.transitions.create(['border-color'], {
        duration: theme.transitions.duration.standard,
      })};
  }

  & label {
    padding-left: 14px;

    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;

    color: ${({ theme }) => theme.palette.semiTransparentBlack.main};

    transform: translate(0px, 10px) scale(1);

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      padding-left: 32px;

      transform: translate(0px, 13px) scale(1);
    }

    &.Mui-focused,
    &.MuiFormLabel-filled {
      transform: translate(26px, -8px) scale(0.8);

      ${({ theme }) => theme.breakpoints.up('tablet')} {
        transform: translate(15px, -10px) scale(0.75);
      }
    }
  }

  & input {
    height: 22px;
    padding: 9px 14px;

    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;

    color: ${({ theme }) => theme.palette.text.primary};

    background-color: ${({ theme }) => theme.palette.background.dark};

    border-radius: 40px;

    overflow: hidden;
    text-overflow: ellipsis;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      height: 26px;
      padding: 13px 32px;
    }
  }

  & > p {
    position: absolute;
    bottom: -7px;
    right: 14px;

    max-width: 230px;
    margin: 0 10px;
    padding: 0 4px;

    font-family: inherit;
    font-size: 11px;
    line-height: 1.3;

    background-color: ${({ theme }) => theme.palette.background.main};

    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.palette.error.main};
    border-radius: 8px;

    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      bottom: -8px;

      font-size: 12px;
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  &:last-of-type {
    margin-bottom: 40px;
  }
`;
