import { styled } from '@mui/material/styles';

import { FilledButton, OutlinedButton } from 'components/Shared';
export const StyledImg = styled('img')`
  max-width: 100%;
  border-bottmom: 1px;
  border-radius: 0px 0px 40px 40px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    max-width: 288px;
    min-height: 328pxpx;
  }
`;

export const ModalTitleNotice = styled('p')`
  color: ${({ theme }) => theme.palette.text.black};
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;

export const ModalParagtaph = styled('p')`
  color: ${({ theme }) => theme.palette.text.black};
  font-weight: 600;
  font-size: 14px;
  align-items: center;
  display: flex;
  column-gap: 57px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;
export const Comments = styled('p')`
  color: ${({ theme }) => theme.palette.text.black};
  margin-bottom: 40px;
  font-size: 14px;
  align-items: center;
  font-weight: 400;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;
export const CommentsWraper = styled('span')`
  color: ${({ theme }) => theme.palette.text.black};
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;

export const ModalImgWraper = styled('div')`
  padding-top: 20px;
  margin-bottom: 16px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;
export const ModalPetInfoWraper = styled('div')`
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;
export const ModalContentWraper = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;
export const NoticeWraper = styled('div')`
  width: 63px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;
export const BtnWraper = styled('div')`
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;
export const BtnAdd = styled(OutlinedButton)`
  width: 240px;
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  line-height: 1.37;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 160px;
    &:not(:last-of-type) {
      margin-bottom: 0;
    }
  }
`;
export const Btn = styled('button')`
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  }
`;
