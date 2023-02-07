import { styled } from '@mui/material/styles';
import { FilledButton, OutlinedButton } from 'components/Shared';

export const ModalButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding-top: 24px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 20px;

    padding-top: 12px;
  }
`;

export const ModalFilledButton = styled(FilledButton)`
  height: 40px;

  font-family: inherit;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 180px;
    height: 44px;

    font-size: 20px;
    line-height: 1.35;
  }

  &:not(:last-of-type) {
    margin-bottom: 0;
  }
`;

export const ModalOutlinedButton = styled(OutlinedButton)`
  height: 40px;

  font-family: inherit;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 180px;
    height: 44px;

    font-size: 20px;
    line-height: 1.35;
  }
`;
