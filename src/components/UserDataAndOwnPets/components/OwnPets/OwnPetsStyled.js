import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const ButtonContainer = styled('div')`
  position: absolute;
  top: 14px;
  right: 20px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    top: 6px;
    right: 30px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    right: 0;
  }
`;

export const OwnPetsList = styled(motion.ul)`
  padding-top: 14px;
  padding-bottom: 14px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-top: -16px;
    padding-top: 0;
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    margin-top: 0;
  }
`;
