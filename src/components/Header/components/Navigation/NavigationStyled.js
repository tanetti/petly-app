import { styled } from '@mui/material/styles';

export const NavigationWrapper = styled('nav')`
  display: flex;
  align-items: center;

  flex-grow: 1;

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    justify-content: flex-end;
  }
`;
