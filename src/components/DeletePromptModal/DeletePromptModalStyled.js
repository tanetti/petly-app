import { styled } from '@mui/material/styles';
import { FilledButton, OutlinedButton } from 'components/Shared';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

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

export const PromptMessage = styled('p')`
  margin-bottom: 12px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.36;

  text-align: center;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 24px;

    font-size: 20px;
  }

  & span {
    font-weight: 500;

    color: ${({ theme }) => theme.palette.accent.dark};
  }
`;

export const ExclamationIcon = styled(ErrorRoundedIcon)`
  display: block;

  width: 60px;
  height: 60px;
  margin: 0 auto 20px auto;

  color: ${({ theme }) => theme.palette.accent.main};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px auto;
  }
`;
