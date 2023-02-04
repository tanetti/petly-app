import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

export const ErrorContainer = styled(motion.div)`
  display: grid;
  place-items: center;
`;

export const ErrorMessage = styled('div')`
  margin-bottom: 20px;

  font-size: 18px;
  font-weight: 500;

  color: ${({ theme }) => theme.palette.accent.main};

  text-align: center;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 24px;
  }
`;

export const ErrorIcon = styled(ErrorOutlineRoundedIcon)`
  font-size: 64px;

  color: ${({ theme }) => theme.palette.accent.dark};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 72px;
  }
`;
