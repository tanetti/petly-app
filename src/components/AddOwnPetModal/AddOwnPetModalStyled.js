import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { FilledButton, OutlinedButton } from 'components/Shared';

export const ModalContainer = styled('div')`
  display: flex;
  flex-direction: column;

  width: calc(${({ theme }) => theme.breakpoints.values.mobileMid}px - 50px);
  max-width: 100%;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 608px;
    padding: 0 60px;
  }
`;

export const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 20px;
  }
`;

export const ModalFilledButton = styled(FilledButton)`
  height: 40px;

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
