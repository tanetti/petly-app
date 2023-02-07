import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const ModalInput = styled(TextField)`
  position: relative;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 16px;
    line-height: 1.63;
  }

  & .MuiInputBase-root {
    width: 100%;
    height: 40px;

    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;

    border-radius: 40px;

    background-color: ${({ theme }) => theme.palette.background.dark};

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      height: 47px;
    }
  }

  & .MuiInputBase-root:hover fieldset {
    border-color: ${({ theme }) => theme.palette.accent.main};
  }

  & fieldset {
    padding-left: 22px;

    border-radius: 40px;

    border-color: ${({ theme }) => theme.palette.accent.light};

    transition: ${({ theme }) =>
      theme.transitions.create(['border-color'], {
        duration: theme.transitions.duration.standard,
      })};
  }

  & input {
    padding: 11px 14px;

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
      padding: 11px 16px;
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

  & .MuiTypography-root {
    font-family: inherit;
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      margin-bottom: 28px;
    }
  }
`;
