import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { Container } from 'components/Shared';
import mobileWave from 'images/home-background/mobile/background-wave.svg';
import mobileGirlPng1x from 'images/home-background/mobile/girl/girl@1x.png';
import mobileGirlPng2x from 'images/home-background/mobile/girl/girl@2x.png';
import mobileGirlPng3x from 'images/home-background/mobile/girl/girl@3x.png';
import mobileGirlWebp1x from 'images/home-background/mobile/girl/girl@1x.webp';
import mobileGirlWebp2x from 'images/home-background/mobile/girl/girl@2x.webp';
import mobileGirlWebp3x from 'images/home-background/mobile/girl/girl@3x.webp';
import tabletWave from 'images/home-background/tablet/background-wave.svg';
import tabletGirlPng1x from 'images/home-background/tablet/girl/girl@1x.png';
import tabletGirlPng2x from 'images/home-background/tablet/girl/girl@2x.png';
import tabletGirlPng3x from 'images/home-background/tablet/girl/girl@3x.png';
import tabletGirlWebp1x from 'images/home-background/tablet/girl/girl@1x.webp';
import tabletGirlWebp2x from 'images/home-background/tablet/girl/girl@2x.webp';
import tabletGirlWebp3x from 'images/home-background/tablet/girl/girl@3x.webp';
import desktopWave from 'images/home-background/desktop/background-wave.svg';
import desktopGirlPng1x from 'images/home-background/desktop/girl/girl@1x.png';
import desktopGirlPng2x from 'images/home-background/desktop/girl/girl@2x.png';
import desktopGirlPng3x from 'images/home-background/desktop/girl/girl@3x.png';
import desktopGirlWebp1x from 'images/home-background/desktop/girl/girl@1x.webp';
import desktopGirlWebp2x from 'images/home-background/desktop/girl/girl@2x.webp';
import desktopGirlWebp3x from 'images/home-background/desktop/girl/girl@3x.webp';
import unionPng from 'images/home-background/desktop/union/union@1x.png';
import unionPng2 from 'images/home-background/desktop/union/union@2x.png';
import unionPng3 from 'images/home-background/desktop/union/union@3x.png';
import unionWebp from 'images/home-background/desktop/union/union@1x.webp';
import unionWebp2 from 'images/home-background/desktop/union/union@2x.webp';
import unionWebp3 from 'images/home-background/desktop/union/union@3x.webp';

export const HomePageSection = styled('section')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 320px 337px, 620px 470px;

  background-image: url(${mobileGirlPng1x}), url(${mobileWave});
  background-image: url(${mobileGirlWebp1x}), url(${mobileWave});

  background-position: left 264px, -86px 145px;

  @media screen and (min-height: 600px) {
    background-position: left bottom, -86px calc(100% + 16px);
  }

  ${({ theme }) => theme.breakpoints.up('mobileMid')} {
    background-position: calc(50% - 80px) 264px, calc(50% - 16px) 145px;

    @media screen and (min-height: 600px) {
      background-position: calc(50% - 80px) bottom,
        calc(50% - 16px) calc(100% + 16px);
    }
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobileGirlPng2x}), url(${mobileWave});
    background-image: url(${mobileGirlWebp2x}), url(${mobileWave});
  }

  @media (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    background-image: url(${mobileGirlPng3x}), url(${mobileWave});
    background-image: url(${mobileGirlWebp3x}), url(${mobileWave});
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    background-size: 699px 733px, 1380px 1194px;

    background-image: url(${tabletGirlPng1x}), url(${tabletWave});
    background-image: url(${tabletGirlWebp1x}), url(${tabletWave});

    background-position: center 460px, calc(50% + 180px) 110px;

    @media screen and (min-height: 1194px) {
      background-position: center bottom, calc(50% + 180px) calc(100% + 110px);
    }

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabletGirlPng2x}), url(${tabletWave});
      background-image: url(${tabletGirlWebp2x}), url(${tabletWave});
    }

    @media (min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      background-image: url(${tabletGirlPng3x}), url(${tabletWave});
      background-image: url(${tabletGirlWebp3x}), url(${tabletWave});
    }
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    background-size: 624px 655px, 1396px 538px;

    background-image: url(${desktopGirlPng1x}), url(${desktopWave});
    background-image: url(${desktopGirlWebp1x}), url(${desktopWave});

    background-position: calc(50% + 330px) 113px, center 359px;

    @media screen and (min-height: 768px) {
      background-position: calc(50% + 330px) bottom, center calc(100% + 130px);
    }

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desktopGirlPng2x}), url(${desktopWave});
      background-image: url(${desktopGirlWebp2x}), url(${desktopWave});
    }

    @media (min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      background-image: url(${desktopGirlPng3x}), url(${desktopWave});
      background-image: url(${desktopGirlWebp3x}), url(${desktopWave});
    }
  }
`;

export const HomePageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding-top: 44px;
  padding-bottom: 0;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    padding-top: 68px;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    padding-top: 72px;
    padding-bottom: 0;
  }
`;

export const Tittle = styled('h2')`
  font-size: 32px;
  line-height: 1.38;

  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 68px;
    line-height: 1.47;
  }
`;

const union = keyframes`
  from {
    scale: 1;
    opacity: 1;
  }
  	25% {
		scale: 0.99;
    opacity: 0.7;
	}
    50% {
		scale: 1;
    opacity: 1;
	}
    75% {
		scale: 0.99;
    opacity: 0.7;
	}
  to {
    scale: 1;
      opacity: 1;
  }
`;

export const Union = styled('div')`
  display: none;

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    position: fixed;
    top: 170px;
    right: calc(50% - 170px);

    display: block;

    width: 92px;
    height: 89px;

    @media screen and (min-height: 768px) {
      top: initial;
      bottom: 509px;
    }

    animation: ${union} 3000ms ${({ theme }) => theme.transitions.main} infinite;

    background-size: 92px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-image: url(${unionPng});
    background-image: url(${unionWebp});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${unionPng2});
      background-image: url(${unionWebp2});
    }

    @media (min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      background-image: url(${unionPng3});
      background-image: url(${unionWebp3});
    }
  }
`;
