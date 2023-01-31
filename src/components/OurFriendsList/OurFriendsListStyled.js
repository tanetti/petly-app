import { styled } from '@mui/material/styles';

export const List = styled('ul')`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 12px;
  margin-top: 28px;
  margin-bottom: 0;
  padding: 0;
  justify-content: center;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    margin-top: 40px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 60px;
  }
`;
