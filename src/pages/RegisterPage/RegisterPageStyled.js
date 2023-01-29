import { styled } from '@mui/material/styles';
import { Container } from 'components/Shared';
import wavesMobile from 'images/background/register/waves-mobile.webp';
import wavesTablet from 'images/background/register/waves-tablet.webp';
import wavesDesktop from 'images/background/register/waves-desktop.webp';

export const RegistrationSection = styled('section')`
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

export const RegistrationContainer = styled(Container)`
  display: grid;
  place-items: center;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    flex-grow: 1;
  }
`;
