import { styled } from '@mui/material/styles';
import {
  ModalFilledButton,
  ModalOutlinedButton,
} from 'components/ModalAddNotice/ModalAddNoticeStyled';

export const AdFilledButton = styled(ModalFilledButton)`
  height: 35px;
  padding: 8px 28px;

  font-size: 14px;
  line-height: 1.36;

  &:not(:last-of-type) {
    width: fit-content;
    margin-right: 8px;
    margin-bottom: 12px;
  }

  &:last-of-type {
    width: fit-content;
    margin-right: 0px;
    margin-bottom: 0px;
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    height: 46px;
    padding: 10px 28px;

    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.04em;

    &:not(:last-of-type) {
      margin-right: 12px;
      margin-bottom: 16px;
    }
  }
`;

export const AdOutlinedButton = styled(ModalOutlinedButton)`
  height: 35px;
  padding: 8px 28px;

  font-size: 14px;
  line-height: 1.36;

  &:not(:last-of-type) {
    width: fit-content;
    margin-right: 8px;
    margin-bottom: 12px;
  }

  &:last-of-type {
    width: fit-content;
    margin-right: 0px;
    margin-bottom: 0px;
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    height: 46px;
    padding: 10px 28px;

    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.04em;

    &:not(:last-of-type) {
      margin-right: 12px;
      margin-bottom: 16px;
    }
  }
`;
