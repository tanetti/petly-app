import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const LoadingContainer = styled(motion.div)`
  display: grid;
  place-items: center;
`;

export const LoadingMessage = styled('div')`
  margin-bottom: 20px;

  font-size: 18px;
  font-weight: 500;

  color: ${({ theme }) => theme.palette.accent.main};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 24px;
  }
`;

export const LoadingProgressBarContainer = styled('div')`
  width: 50%;

  border-radius: 4px;

  overflow: hidden;
`;
