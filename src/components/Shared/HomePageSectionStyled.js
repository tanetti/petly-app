import { styled } from '@mui/material/styles';
import wavesMobilePng1 from 'images/home-page/mobile/wave-mobile.png';
import wavesMobilePng2 from 'images/home-page/mobile/wave-mobile@2x.png';
import wavesMobilePng3 from 'images/home-page/mobile/wave-mobile@3x.png';
import wavesMobileWebp1 from 'images/home-page/mobile/wave-mobile.webp';
import wavesMobileWebp2 from 'images/home-page/mobile/wave-mobile@2x.webp';
import wavesMobileWebp3 from 'images/home-page/mobile/wave-mobile@3x.webp';
import wavesTabletPng1 from 'images/home-page/tablet/wave-tablet.png';
import wavesTabletPng2 from 'images/home-page/tablet/wave-tablet@2x.png';
import wavesTabletPng3 from 'images/home-page/tablet/wave-tablet@3x.png';
import wavesTabletWebp1 from 'images/home-page/tablet/wave-tablet.webp';
import wavesTabletWebp2 from 'images/home-page/tablet/wave-tablet@2x.webp';
import wavesTabletWebp3 from 'images/home-page/tablet/wave-tablet@3x.webp';
import wavesDesktopPng1 from 'images/home-page/desktop/wave-desktop.png';
import wavesDesktopPng2 from 'images/home-page/desktop/wave-desktop@2x.png';
import wavesDesktopPng3 from 'images/home-page/desktop/wave-desktop@3x.png';
import wavesDesktopWebp1 from 'images/home-page/desktop/wave-desktop.webp';
import wavesDesktopWebp2 from 'images/home-page/desktop/wave-desktop@2x.webp';
import wavesDesktopWebp3 from 'images/home-page/desktop/wave-desktop@3x.webp';

export const PageSection = styled('section')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background-size: 620px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom -15px left calc(50% + 60px);

  background-image: url(${wavesMobilePng1});
  background-image: url(${wavesMobileWebp1});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${wavesMobilePng2});
    background-image: url(${wavesMobileWebp2});
  }

  @media (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    background-image: url(${wavesMobilePng3});
    background-image: url(${wavesMobileWebp3});
  }

  @media screen and (min-width: 528px) {
    background-position: bottom -180px left calc(50% - 10px);
  }

  @media screen and (min-width: 768px) and (min-height: 1193px) {
    background-size: 1449px;
    background-position: bottom -185px left calc(50% + 155px);

    background-image: url(${wavesTabletPng1});
    background-image: url(${wavesTabletWebp1});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${wavesTabletPng2});
      background-image: url(${wavesTabletWebp2});
    }

    @media (min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      background-image: url(${wavesTabletPng3});
      background-image: url(${wavesTabletWebp3});
    }
  }

  @media screen and (min-width: 1193px) and (max-width: 1279px) {
    background-size: 1249px;
    background-position: bottom -500px left calc(50% - 50px);
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    background-size: 1396px;
    background-position: bottom -165px center;
    background-image: url(${wavesDesktopPng1});
    background-image: url(${wavesDesktopWebp1});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${wavesDesktopPng2});
      background-image: url(${wavesDesktopWebp2});
    }

    @media (min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      background-image: url(${wavesDesktopPng3});
      background-image: url(${wavesDesktopWebp3});
    }
  }
`;
