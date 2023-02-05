import { styled } from '@mui/material/styles';
import {
  ModalFilledButton,
  ModalOutlinedButton,
} from 'components/ModalAddNotice/ModalAddNoticeStyled';

export const AdFilledButton = styled(ModalFilledButton)`
  &:not(:last-of-type) {
    width: fit-content;
    margin-bottom: 16px;
    margin-right: 12px;
  }

  &:last-of-type {
    width: fit-content;
    margin-bottom: 16px;
    margin-right: 12px;
  }
`;

export const AdOutlinedButton = styled(ModalOutlinedButton)`
  &:not(:last-of-type) {
    width: fit-content;
    margin-bottom: 16px;
    margin-right: 12px;
  }

  &:last-of-type {
    width: fit-content;
    margin-bottom: 16px;
    margin-right: 12px;
  }
`;
