import { styled } from '@mui/material/styles';
import { SwipeableDrawer } from '@mui/material';

export const NavigationWrapper = styled('nav')`
  display: flex;
  align-items: center;
  flex-grow: 1;

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    justify-content: flex-end;
  }
`;

export const SwipeableMobileMenu = styled(SwipeableDrawer)`
  & .MuiPaper-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    width: 100%;
    padding-top: 104px;

    background-color: ${({ theme }) => theme.palette.background.dark};

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      padding-top: 160px;
    }
  }
`;

export const NavigationDesktopContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    justify-content: space-between;
  }
`;
