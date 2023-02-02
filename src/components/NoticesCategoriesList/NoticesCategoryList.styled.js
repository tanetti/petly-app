import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  width: 100%;
  position: relative;
   
`;

export const List = styled('ul')`
list-style:none;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap:32px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%);



  
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 40px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 60px;
  }
`;