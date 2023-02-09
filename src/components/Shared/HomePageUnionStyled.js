import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

import unionPng from 'images/home-page/desktop/union.png';
import unionPng2 from 'images/home-page/desktop/union@2x.png';
import unionPng3 from 'images/home-page/desktop/union@3x.png';
import unionWebp from 'images/home-page/desktop/union.webp';
import unionWebp2 from 'images/home-page/desktop/union@2x.webp';
import unionWebp3 from 'images/home-page/desktop/union@3x.webp';

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
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    line-height: 1.47;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;

    animation: ${union} 3000ms ${({ theme }) => theme.transitions.main} infinite;

    background-size: 92px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: bottom 509px right 460px;
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
