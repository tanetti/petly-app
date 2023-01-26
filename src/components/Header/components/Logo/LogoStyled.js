import { styled } from '@mui/material/styles';

export const LogoWrapper = styled('p')`
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

export const LogoAccent = styled('span')`
  color: ${({ theme }) => theme.palette.accent.main};
`;
