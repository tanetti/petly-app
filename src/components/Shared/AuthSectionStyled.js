import { styled } from '@mui/material/styles';
import wavesMobile from 'images/auth-background/waves-mobile.webp';
import wavesTablet from 'images/auth-background/waves-tablet.webp';
import wavesDesktop from 'images/auth-background/waves-desktop.webp';

export const AuthSection = styled('section')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background: url(${wavesMobile});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left calc(50% + 88px) bottom -270px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    background: url(${wavesTablet});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center bottom -140px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    background: url(${wavesDesktop});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center bottom -10px;
  }
`;
