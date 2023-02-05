import { styled } from '@mui/material/styles';

export const BarContainer = styled('div')`
  margin-bottom: 30px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: grid;
    grid-template-columns: 1fr auto;
    place-items: start;
    gap: 18px;

    margin-bottom: 57px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    margin-bottom: 60px;
  }
`;
