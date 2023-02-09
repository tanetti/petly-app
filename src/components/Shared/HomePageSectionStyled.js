import { styled } from '@mui/material/styles';
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

export const PageSection = styled('section')`
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

    background-position: center 460px, calc(50% - 16px) 145px;

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
  }
`;
