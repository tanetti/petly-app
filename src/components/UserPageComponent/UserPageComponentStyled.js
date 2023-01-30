import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    display: grid;
    grid-template-columns: 411px 1fr;
    grid-column-gap: 32px;
  }
`;
