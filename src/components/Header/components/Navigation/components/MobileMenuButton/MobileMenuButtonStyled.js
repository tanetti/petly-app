import { styled } from '@mui/material/styles';

export const NavButton = styled('button')`
  position: relative;
  z-index: 25;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 40px;
  height: 40px;
  padding: 11px 5px 10px 5px;

  background-color: transparent;

  border-width: 0;

  cursor: pointer;

  transform: ${({ isMobileMenuOpened }) =>
    isMobileMenuOpened ? 'rotate(90deg)' : 'none'};

  transition: ${({ theme }) =>
    theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.between('mobile', 'desktop')} {
    margin-left: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    display: none;
  }

  &:hover span,
  &:focus span {
    background-color: ${({ theme }) => theme.palette.accent.main};
  }

  & span:first-of-type {
    transform: ${({ isMobileMenuOpened }) =>
      isMobileMenuOpened ? 'rotate(45deg) translate(6px, 5px)' : 'none'};
  }

  & span:nth-of-type(2) {
    opacity: ${({ isMobileMenuOpened }) => (isMobileMenuOpened ? '0' : '1')};

    transform-origin: left;
    transform: ${({ isMobileMenuOpened }) =>
      isMobileMenuOpened ? 'scale(0)' : 'none'};
  }

  & span:last-of-type {
    transform: ${({ isMobileMenuOpened }) =>
      isMobileMenuOpened ? 'rotate(-45deg) translate(6px, -5px)' : 'none'};
  }
`;

export const NavButtonStripe = styled('span')`
  display: block;

  width: 100%;
  height: 3px;

  background-color: ${({ theme }) => theme.palette.text.primary};

  border-radius: 4px;

  transition: ${({ theme }) =>
    theme.transitions.create(['background-color', 'opacity', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};
`;
