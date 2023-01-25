import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

export const NavLinkButtonLike = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: ${({ is_account }) => (is_account === 'true' ? '164px' : '0')};
  height: 35px;
  padding: 0 28px;

  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.palette.accent.main};
  background-color: ${({ theme }) => theme.palette.background.main};

  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.accent.main};
  border-radius: 40px;

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'background-color', 'border-color'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    height: 44px;

    font-size: ${({ is_account }) => (is_account === 'true' ? '16px' : '20px')};
    line-height: ${({ is_account }) =>
      is_account === 'true' ? '1.38' : '1.35'};
  }

  &:not(:last-of-type) {
    margin-right: 12px;

    ${({ theme }) => theme.breakpoints.up('desktop')} {
      margin-right: 20px;
    }
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
    border-color: ${({ theme }) => theme.palette.accent.dark};
  }

  &.active {
    color: ${({ theme }) => theme.palette.text.white};
    border-color: ${({ theme }) => theme.palette.accent.main};
    background-color: ${({ theme }) => theme.palette.accent.main};
  }
`;
