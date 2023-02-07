import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled('h1')`
  margin: 0;

  font-family: 'Poppins';
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;

  letter-spacing: 0.07em;

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    position: relative;
    z-index: 1220;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    font-size: 32px;
  }
`;

export const LogoLink = styled(Link)`
  color: inherit;

  &:hover,
  &:focus {
    & span {
      color: ${({ theme }) => theme.palette.accent.dark};
    }
  }
`;

export const LogoAccent = styled('span')`
  color: ${({ theme }) => theme.palette.accent.main};

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};
`;
