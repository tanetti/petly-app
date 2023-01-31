import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  max-width: 100%;
   
`;

export const List = styled('ul')`
list-style:none;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap:32px;
  margin-left: auto;
  margin-right: auto;

  
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 40px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 60px;
  }
`;