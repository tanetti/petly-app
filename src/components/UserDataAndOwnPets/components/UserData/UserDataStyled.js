import { styled } from '@mui/material/styles';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NoPhotographyRoundedIcon from '@mui/icons-material/NoPhotographyRounded';
import { LoadingButton } from '@mui/lab';

export const UserControlContainer = styled('div')`
  padding: 16px;

  background-color: ${({ theme }) => theme.palette.background.main};

  border-radius: 20px;

  box-shadow: ${({ theme }) => theme.shadows[51]};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: flex;
    flex-direction: row-reverse;

    margin-left: -1000px;
    padding: 24px 40px 24px 32px;

    border-radius: 0 40px 40px 0;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    display: block;

    margin-left: -16px;
    padding: 20px 16px 20px 16px;
  }
`;

export const ImageControlContainer = styled('div')`
  position: relative;

  margin-bottom: 32px;
  padding: 4px 8px 38px 8px;

  ${({ theme }) => theme.breakpoints.between('tablet', 'desktop')} {
    margin-bottom: 0;
    padding: 0 0 38px 0;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 0;
  }
`;

export const ActionButton = styled(LoadingButton)`
  position: absolute;
  bottom: 0;
  right: 0;

  min-width: 90px;
  padding: 3px 8px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;

  border-width: 0;
  border-radius: 16px;

  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.main};

  text-transform: none;

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.text.black};

    & svg {
      color: ${({ theme }) => theme.palette.accent.dark};
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.palette.text.searchPlaceholder};

    & svg {
      color: ${({ theme }) => theme.palette.text.searchPlaceholder};
    }
  }

  & > span {
    margin-right: 4px;
  }

  & svg {
    color: ${({ theme }) => theme.palette.accent.main};

    transition: ${({ theme }) =>
      theme.transitions.create(['color'], {
        duration: theme.transitions.duration.standard,
      })};
  }
`;

export const DeleteAvatarIcon = styled(NoPhotographyRoundedIcon)`
  width: 25px;
  height: 25px;

  padding-bottom: 2px;
`;

export const SaveAvatarIcon = styled(CameraAltRoundedIcon)`
  width: 25px;
  height: 25px;

  padding-bottom: 2px;
`;

export const DataControlContainer = styled('div')`
  ${({ theme }) => theme.breakpoints.only('tablet')} {
    margin-right: 52px;
  }
`;

export const DataForm = styled('form')`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-row-gap: 6px;
  grid-column-gap: 8px;
  align-items: center;

  margin-bottom: 42px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    grid-row-gap: 8px;
    grid-column-gap: 24px;

    margin-bottom: 33px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    margin-bottom: 26px;
  }
`;

export const LogoutButton = styled(LoadingButton)`
  display: flex;

  min-width: 90px;
  margin-left: auto;
  margin-right: -6px;
  padding: 0 10px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  border-width: 0;
  border-radius: 20px;

  color: ${({ theme }) => theme.palette.semiTransparentBlack.main};
  background-color: ${({ theme }) => theme.palette.background.main};

  text-transform: none;

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-left: -10px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.text.black};

    & svg {
      color: ${({ theme }) => theme.palette.accent.main};
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.palette.text.searchPlaceholder};

    & svg {
      color: ${({ theme }) => theme.palette.text.searchPlaceholder};
    }
  }

  & > span {
    margin-right: 6px;
  }

  & svg {
    color: ${({ theme }) => theme.palette.accent.light};

    transition: ${({ theme }) =>
      theme.transitions.create(['color'], {
        duration: theme.transitions.duration.standard,
      })};
  }
`;

export const LogoutIcon = styled(LogoutRoundedIcon)`
  width: 23px;
  height: 23px;

  padding-bottom: 2px;
`;
