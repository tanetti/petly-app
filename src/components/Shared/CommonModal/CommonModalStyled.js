import { styled } from '@mui/material/styles';
import { IconButton, Modal } from '@mui/material';

export const StyledModal = styled(Modal)`
  display: grid;
  place-items: center;
`;

export const ModalWindow = styled('div')`
  position: relative;

  display: flex;

  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);
  padding: 10px 10px;

  background: ${({ theme }) => theme.palette.background.main};

  border-radius: 20px;

  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    max-width: calc(100vw - 64px);
    max-height: calc(100vh - 64px);
  }
`;

export const ModalCloseButton = styled(IconButton)`
  position: absolute;

  color: ${({ theme }) => theme.palette.semiTransparentBlack.main};
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
  max-height: 100cqh;
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
    margin-top: 30px;
    margin-bottom: 12px;

    background-color: ${({ theme }) => theme.palette.semiTransparentBlack.main};

    border-radius: 4px;
  }
`;

export const ModalTitle = styled('p')`
  margin: 0;
  margin-bottom: 20px;

  font-size: 24px;
  line-height: 1.38;

  text-align: center;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-weight: 600;
    font-size: 36px;
    line-height: 1.36;
  }
`;
