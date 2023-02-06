import { styled } from '@mui/material/styles';
import { IconButton, Modal } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const StyledModal = styled(Modal)`
  display: grid;
  place-items: center;
`;

export const ModalWindow = styled('div')`
  position: relative;

  display: flex;

  max-width: calc(100vw - 40px);
  min-width: 280px;
  max-height: calc(100vh - 40px);
  padding: 10px 10px;

  color: ${({ theme }) => theme.palette.text.black};
  background-color: ${({ theme }) => theme.palette.background.main};

  border-radius: 20px;

  outline: transparent;

  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    max-width: calc(100vw - 64px);
    max-height: calc(100vh - 64px);
  }
`;

export const ModalCloseButton = styled(IconButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  width: 34px;
  height: 34px;
  padding: 0;

  color: inherit;
  background-color: ${({ theme }) => theme.palette.background.dark};

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.main};
    background-color: ${({ theme }) => theme.palette.background.dark};
  }
`;

export const CloseButtonIcon = styled(CloseRoundedIcon)`
  font-size: 34px;
`;

export const ModalWindowGradient = styled('div')`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 1) 10px,
      rgba(255, 255, 255, 0.8) 18px,
      rgba(255, 255, 255, 0) 26px,
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 1) 10px,
      rgba(255, 255, 255, 0.8) 18px,
      rgba(255, 255, 255, 0) 26px,
      rgba(255, 255, 255, 0)
    );

  pointer-events: none;
`;

export const ContentContainer = styled('div')`
  width: 100%;
  max-height: 100;
  padding: 30px 10px;

  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;

    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.accent.main};

    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 66px;
    margin-bottom: 12px;

    background-color: ${({ theme }) => theme.palette.semiTransparentBlack.main};

    border-radius: 4px;
  }
`;

export const ModalTitle = styled('p')`
  margin: 0;
  margin-bottom: 20px;
  padding: 0 54px;

  font-size: 24px;
  line-height: 1.38;

  text-align: center;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-weight: 600;
    font-size: 36px;
    line-height: 1.36;
  }
`;
