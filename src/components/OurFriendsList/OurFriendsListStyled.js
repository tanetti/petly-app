import { styled } from '@mui/material/styles';

export const FriendsList = styled('ul')`
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 32px;
    grid-column-gap: 30px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 32px;
  }

  & a {
    outline: transparent;
  }
`;
