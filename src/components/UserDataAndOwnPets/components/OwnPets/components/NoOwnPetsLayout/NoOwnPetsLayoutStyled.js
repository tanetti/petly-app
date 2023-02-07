import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const NoOwnPetsWrapper = styled(motion.div)`
  display: grid;
  place-items: center;
  gap: 40px;

  padding: 30px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    gap: 60px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    padding: 70px;
  }
`;

export const NotPets = styled('p')`
  font-size: 20px;
  line-height: 1.35;

  text-align: center;

  color: ${({ theme }) => theme.palette.accent.dark};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 24px;
  }
`;

export const NotPetsImg = styled('img')`
  width: 200px;
`;
