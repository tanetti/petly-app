import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

export const NavList = styled('ul')`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  padding: 0;
  margin: 0;

  list-style: none;

  text-align: center;

  ${({ theme }) => theme.breakpoints.between('tablet', 'desktop')} {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    gap: 60px;

    width: 100%;
    height: 100%;
    padding-top: 160px;

    background-color: ${({ theme }) => theme.palette.background.dark};

    opacity: ${({ isMobileMenuOpened }) => (isMobileMenuOpened ? '1' : '0')};

    visibility: ${({ isMobileMenuOpened }) =>
      isMobileMenuOpened ? 'initial' : 'hidden'};

    transform: ${({ isMobileMenuOpened }) =>
      isMobileMenuOpened ? 'translateY(0)' : 'translateY(-105%)'};

    transition: ${({ theme }) =>
      theme.transitions.create(['opacity', 'visibility', 'transform'], {
        duration: theme.transitions.duration.standard,
      })};
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    flex-direction: row;
    gap: 80px;
  }
`;

export const NavGeneralLink = styled(NavLink)`
  position: relative;

  font-size: 32px;
  line-height: 1.38;

  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.palette.text.secondary};

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet ')} {
    font-size: 48px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    padding: 10px 0;

    font-size: 20px;
    line-height: 1.35;
  }

  &:hover,
  &:focus,
  &.active {
    color: ${({ theme }) => theme.palette.accent.main};
  }

  &::after {
    content: '';

    position: absolute;
    bottom: 7px;

    display: block;

    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme.palette.accent.main};

    transform: scaleX(0);
    transform-origin: center;

    transition: ${({ theme }) =>
      theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.standard,
      })};

    ${({ theme }) => theme.breakpoints.up('desktop')} {
      bottom: 13px;
    }
  }

  &.active::after {
    transform: scaleX(1);
  }
`;
