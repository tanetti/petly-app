import { styled } from '@mui/material/styles';

export const NavigationWrapper = styled('nav')`
  display: flex;
  align-items: center;
  flex-grow: 1;

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    justify-content: flex-end;
  }
`;

export const NavigationInnerContainer = styled('div')`
  display: flex;

  outline: transparent;

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    flex-direction: column-reverse;
    justify-content: flex-end;

    gap: 60px;

    width: 100%;
    height: 100%;
    padding-top: 104px;

    background-color: ${({ theme }) => theme.palette.background.dark};

    opacity: ${({ isMobileMenuOpened }) => (isMobileMenuOpened ? '1' : '0')};

    visibility: ${({ isMobileMenuOpened }) =>
      isMobileMenuOpened ? 'initial' : 'hidden'};

    text-align: center;

    transform: ${({ isMobileMenuOpened }) =>
      isMobileMenuOpened ? 'translateY(0)' : 'translateY(-105%)'};

    transition: ${({ theme }) =>
      theme.transitions.create(['opacity', 'visibility', 'transform'], {
        duration: theme.transitions.duration.standard,
      })};
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    justify-content: space-between;
  }
`;
