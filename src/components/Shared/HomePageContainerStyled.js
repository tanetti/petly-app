import { styled } from '@mui/material/styles';
import { Container } from 'components/Shared';
import portretMobilePng1 from 'images/home-page/mobile/portrait.png';
import portretMobilePng2 from 'images/home-page/mobile/portrait@2x.png';
import portretMobilePng3 from 'images/home-page/mobile/portrait@3x.png';
import portretMobileWebp1 from 'images/home-page/mobile/portrait.webp';
import portretMobileWebp2 from 'images/home-page/mobile/portrait@2x.webp';
import portretMobileWebp3 from 'images/home-page/mobile/portrait@3x.webp';
import portretTabletPng from 'images/home-page/tablet/portrait.png';
import portretTabletPng2 from 'images/home-page/tablet/portrait@2x.png';
import portretTabletPng3 from 'images/home-page/tablet/portrait@3x.png';
import portretTabletWebp from 'images/home-page/tablet/portrait.webp';
import portretTabletWebp2 from 'images/home-page/tablet/portrait@2x.webp';
import portretTabletWebp3 from 'images/home-page/tablet/portrait@3x.webp';
import portretDesktopPng from 'images/home-page/desktop/portrait.png';
import portretDesktopPng2 from 'images/home-page/desktop/portrait@2x.png';
import portretDesktopPng3 from 'images/home-page/desktop/portrait@3x.png';
import portretDesktopWebp from 'images/home-page/desktop/portrait.webp';
import portretDesktopWebp2 from 'images/home-page/desktop/portrait@2x.webp';
import portretDesktopWebp3 from 'images/home-page/desktop/portrait@3x.webp';

export const HomePageContainer = styled(Container)`
  padding-top: 62px;
  padding-bottom: 0;
  height: calc(100vh - 74px);

  background-size: 320px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom 0 left calc(50%);

  background-image: url(${portretMobilePng1});
  background-image: url(${portretMobileWebp1});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${portretMobilePng2});
    background-image: url(${portretMobileWebp2});
  }

  @media (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    background-image: url(${portretMobilePng3});
    background-image: url(${portretMobileWebp3});
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    padding-top: 88px;
    background-size: 645px;
    height: calc(100vh - 92px);

    background-position: bottom 0 center;
    background-image: url(${portretTabletPng});
    background-image: url(${portretTabletWebp});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${portretTabletPng2});
      background-image: url(${portretTabletWebp2});
    }

    @media (min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      background-image: url(${portretTabletPng3});
      background-image: url(${portretTabletWebp3});
    }
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    padding-top: 92px;
    background-size: 590px;
    position: relative;
    height: calc(100vh - 88px);

    background-position: bottom 0 right calc(50% - 350px);
    background-image: url(${portretDesktopPng});
    background-image: url(${portretDesktopWebp});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${portretDesktopPng2});
      background-image: url(${portretDesktopWebp2});
    }

    @media (min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      background-image: url(${portretDesktopPng3});
      background-image: url(${portretDesktopWebp3});
    }
  }
`;
