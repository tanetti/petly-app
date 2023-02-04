import { styled } from '@mui/material/styles';
import { IconButton, Modal } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const StyledImg = styled('img')`
  max-width: 240px;
  border-bottmom: 1px;
  border-radius: 0px 0px 40px 40px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    max-width: 288px;
    min-height: 328pxpx;
    margin-right: 0px;
  }
`;

export const ModalTitleNotice = styled('p')`
  color: ${({ theme }) => theme.palette.text.black};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;

export const ModalParagtaph = styled('p')`
  color: ${({ theme }) => theme.palette.text.black};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;
