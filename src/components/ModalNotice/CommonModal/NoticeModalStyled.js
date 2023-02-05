import { styled } from '@mui/material/styles';
import { IconButton, Modal } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const StyledImg = styled('img')`
  max-width: 100%;
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
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;

export const ModalParagtaph = styled('p')`
  color: ${({ theme }) => theme.palette.text.black};
  font-weight: 600;
  font-size: 14px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;

export const ModalImgWraper = styled('div')`
  padding-top: 20px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;
export const ModalPetInfoWraper = styled('div')`
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;
export const ModalContentWraper = styled('div')`
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;
