import { styled } from '@mui/material/styles';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export const Wrapper = styled('div')`
  margin-bottom: 40px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 20px;
    position: relative;
    height: 390px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    position: relative;
    height: auto;
  }
`;

export const WrapperTitle = styled('h2')`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 1.36;
    margin-bottom: 40px;
    margin-top: 40px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    margin-bottom: 24px;
    margin-top: 0;
  }
`;

export const DataUser = styled('div')`
  background-color: ${({ theme }) => theme.palette.background.main};
  padding: 16px;
  text-align: end;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: grid;
    grid-template-columns: repeat(1fr, 233px);
    justify-content: end;
    padding: 40px 40px 24px;
    position: absolute;
    // bottom: -35px;
    right: 0;
    width: 100vw;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    display: grid;
    min-height: 541px;

    position: absolute;
    top: 60px;
    right: 0;
    width: 100vw;
  }
`;

export const WrapperPhoto = styled('div')`
  position: relative;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    grid-column: 2;
    grid-row: 1;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    margin-left: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;

    grid-column: 1;
    grid-row: 1;
    position: relative;
  }
`;

export const WrapperForm = styled('div')`
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    position: relative;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
  }
`;

export const Img = styled('img')`
  width: 100%;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 233px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    width: 233px;
  }
`;

export const EditPhotoBtn = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  background-color: transparent;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  padding: 0;
  margin-left: auto;
  margin-bottom: 32px;
  transition: all 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.palette.accent.main};
    filter: hue-rotate(220deg);
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 0;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
`;

export const CameraIcon = styled(CameraAltRoundedIcon)`
  color: ${({ theme }) => theme.palette.accent.main};
  width: 18px;
  margin-right: 5px;
`;

export const Form = styled('form')`
  margin-bottom: 42px;
  font-size: 12px;
  text-align: start;
  display: grid;
  grid-template-columns: 42px 1fr 18px;
  grid-column-gap: 2px;
  grid-row-gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    grid-template-columns: 75px 1fr 35px;
    grid-column-gap: 24px;
    grid-row-gap: 8px;
    font-size: 18px;
    line-height: 1.39;
    letter-spacing: 0.04em;
    margin-bottom: 33px;
    margin-right: 52px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    grid-template-columns: 80px 1fr 35px;
    grid-column-gap: 15px;
    grid-row-gap: 8px;
    margin-bottom: 24px;
    margin-right: 0;
  }
`;

export const Input = styled('input')`
  height: 24px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 40px;
  outline: ${({ theme }) => theme.palette.accent.main};
  border: none;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: #111111;
  background-color: #fdf7f2;
  outline: 1px solid rgba(245, 146, 86, 0.5);

  &:disabled {
    background-color: transparent;
    outline: none;
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    height: 32px;
    padding-left: 12px;
    padding-right: 12px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.39;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    padding-left: 12px;
    padding-right: 12px;
    font-weight: 500;
  }
`;

export const CreateIconBtn = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  padding: 0;
  border-radius: 50%;
  background-color: #fdf7f2;
  width: 20px;
  height: 20px;
  transition: all 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.palette.accent.main};
    filter: hue-rotate(220deg);
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 30px;
    height: 30px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    width: 32px;
    height: 32px;
  }
`;

export const CreateIcon = styled(CreateRoundedIcon)`
  color: ${({ theme }) => theme.palette.accent.main};
  width: 12px;
  height: 12px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 20px;
    height: 20px;
  }
`;

export const CreateIconDone = styled(CheckRoundedIcon)`
  color: ${({ theme }) => theme.palette.accent.main};
  width: 12px;
  height: 12px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 20px;
    height: 20px;
  }
`;

export const LogOutBtn = styled('button')`
  font-size: 16px;
  line-height: 1.38;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  border: transparent;
  background-color: transparent;
  padding: 0;
  margin-left: auto;
  color: rgba(17, 17, 17, 0.6);
  transition: all 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.palette.accent.main};
    filter: hue-rotate(220deg);
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin: 0;
  }
`;

export const LogOutIcon = styled(LogoutRoundedIcon)`
  color: ${({ theme }) => theme.palette.accent.main};
  width: 18px;
  margin-right: 8px;

  ${({ theme }) => theme.breakpoints.up('desktop')} {
  }
`;

export const Hidden = styled('input')`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;
