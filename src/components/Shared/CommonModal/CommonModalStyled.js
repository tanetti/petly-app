import { styled } from '@mui/material/styles';
import { Modal } from '@mui/material';

export const StyledModal = styled(Modal)`
  display: grid;
  place-items: center;
`;

export const ModalWindow = styled('div')`
  position: relative;

  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);
  padding: 40px 20px;

  background: ${({ theme }) => theme.palette.background.main};

  border-radius: 20px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    max-width: calc(100vw - 64px);
    max-height: calc(100vh - 64px);
  }
`;
