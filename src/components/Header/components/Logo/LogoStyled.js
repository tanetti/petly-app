import { styled } from '@mui/material/styles';

export const LogoWrapper = styled('p')`
  margin: 0;

  font-family: 'Poppins';
  font-size: 32px;
  font-weight: 700;
  line-height: 1.5;

  letter-spacing: 0.07em;

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    position: relative;
    z-index: 20;
  }
`;

export const LogoAccent = styled('span')`
  color: ${({ theme }) => theme.palette.accent.main};
`;
