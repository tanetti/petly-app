import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const NoticesListStyled = styled(motion.ul)`
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    grid-template-columns: repeat(4, 1fr);
  }

  & a {
    outline: transparent;
  }
`;
