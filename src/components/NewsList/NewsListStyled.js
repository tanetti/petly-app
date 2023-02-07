import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const NewsListStyled = styled(motion.ul)`
  padding-top: 12px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 60px;
    grid-column-gap: 32px;

    padding-top: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    grid-template-columns: repeat(3, 1fr);
  }

  & a {
    outline: transparent;
  }
`;
