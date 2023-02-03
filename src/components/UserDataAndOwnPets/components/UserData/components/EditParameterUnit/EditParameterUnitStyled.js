import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';

export const ParameterLabel = styled('label')`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;

  text-transform: capitalize;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 18px;
    line-height: 1.39;
  }
`;

export const DateInputWrapper = styled('div')`
  position: relative;

  & button {
    position: absolute;
    top: 50%;
    right: 14px;

    width: 26px;
    height: 26px;

    transform: translateY(-50%);

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      width: 35px;
      height: 35px;
    }
  }

  & svg {
    width: 18px;
    height: 18px;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ParameterInput = styled('input')`
  width: 100%;
  padding: 4px 18px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.dark};

  border-width: 1px;
  border-color: ${({ theme }) => theme.palette.accent.light};
  border-radius: 40px;

  outline-color: transparent;

  overflow: hidden;
  text-overflow: ellipsis;

  transition: ${({ theme }) =>
    theme.transitions.create(
      ['background-color', 'border-color', 'outline-color'],
      {
        duration: theme.transitions.duration.standard,
      }
    )};

  &:focus,
  &:hover {
    outline-width: 1px;
    outline-style: solid;
    outline-color: ${({ theme }) => theme.palette.accent.main};
  }

  &:disabled {
    background-color: transparent;
    border-color: transparent;
    outline-color: transparent;
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    padding: 4px 12px;

    font-size: 18px;
    line-height: 1.39;
  }
`;

export const ParameterButton = styled(LoadingButton)`
  position: relative;

  display: grid;
  place-items: center;

  min-width: 20px;
  width: 20px;
  height: 20px;
  padding: 0;

  font-size: 12px;

  border-radius: 50%;

  color: ${({ theme }) => theme.palette.accent.main};
  background-color: ${({ theme }) => theme.palette.background.dark};

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'background-color'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 32px;
    height: 32px;

    font-size: 20px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
    background-color: ${({ theme }) => theme.palette.accent.light};
  }

  &:disabled {
    color: ${({ theme }) => theme.palette.semiTransparentBlack.main};
    background-color: transparent;
  }

  & > div {
    display: grid;
    place-items: center;

    width: 100%;
    height: 100%;
  }
`;

export const EditIcon = styled(EditRoundedIcon)`
  font-size: inherit;
`;

export const SaveIcon = styled(DoneOutlineRoundedIcon)`
  font-size: inherit;
`;
