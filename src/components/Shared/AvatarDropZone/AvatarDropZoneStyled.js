import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { ReactComponent as AddImageIconSvg } from 'images/add-image-icon.svg';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import DoNotDisturbAltRoundedIcon from '@mui/icons-material/DoNotDisturbAltRounded';

export const DropZoneContainer = styled('div')`
  width: ${({ variant }) => {
    if (variant === 'own') return '208px';
    if (variant === 'notice') return '116px';
    return '100%';
  }};
  margin: ${({ variant }) => {
    if (variant === 'own') return '0 auto';
    if (variant === 'notice') return '0 auto 0 0';
    return '0';
  }};
  margin-bottom: ${({ variant }) => {
    if (variant === 'own') return '20px';
    return '0';
  }};

  border-radius: ${({ variant }) => {
    if (variant === 'own') return '20px';
    if (variant === 'notice') return '20px';
    return '50%';
  }};

  background-color: ${({ isModalZone, theme }) =>
    isModalZone ? theme.palette.background.dark : 'transparent'};

  overflow: hidden;

  box-shadow: ${({ theme, variant }) => {
    if (variant === 'own') return 'none';
    if (variant === 'notice') return 'none';
    return theme.shadows[52];
  }};

  container-type: inline-size;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: ${({ variant }) => {
      if (variant === 'own') return '182px';
      if (variant === 'notice') return '140px';
      return '233px';
    }};
    height: ${({ variant }) => {
      if (variant === 'own') return '182px';
      if (variant === 'notice') return '140px';
      return '233px';
    }};

    margin-bottom: ${({ variant }) => {
      if (variant === 'own') return '40px';
      return '0';
    }};

    border-radius: ${({ variant }) => {
      if (variant === 'own') return '40px';
      if (variant === 'notice') return '20px';
      return '50%';
    }};
  }
`;

export const InnerContainer = styled('div')`
  position: relative;

  display: grid;
  place-items: center;

  width: 100cqw;
  height: 100cqw;
`;

export const CurrentImage = styled('img')`
  height: 100%;

  object-fit: cover;

  opacity: ${({ shouldShown }) => (shouldShown ? '1' : '0')};

  transition: ${({ theme }) =>
    theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.standard,
    })};
`;

export const ControlsContainer = styled('div')`
  position: absolute;
  top: 0;
  left: 0;

  display: grid;
  place-items: center;

  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.palette.semiTransparentBlack.main};

  border-radius: ${({ variant }) => {
    if (variant === 'own') return '20px';
    if (variant === 'notice') return '20px';
    return '50%';
  }};

  cursor: pointer;

  outline-offset: -2px;
  outline-color: ${({ theme }) => theme.palette.accent.main};

  overflow: hidden;

  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'initial')};

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
  }

  &:hover svg,
  &:focus svg {
    transform: scale(1.2);
  }
`;

export const IconContainer = styled(motion.div)`
  display: grid;
  place-items: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme, variant }) => {
    if (variant === 'own') return theme.palette.semiTransparentBlack.light;
    if (variant === 'notice') return theme.palette.semiTransparentBlack.light;
    return theme.palette.background.light;
  }};

  border-radius: ${({ variant }) => {
    if (variant === 'own') return '20px';
    if (variant === 'notice') return '20px';
    return '50%';
  }};

  pointer-events: none;
`;

export const AddImageIcon = styled(AddImageIconSvg)`
  stroke: currentColor;

  pointer-events: none;

  transition: ${({ theme }) =>
    theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.standard,
    })};
`;

export const AllowedImageIcon = styled(AddAPhotoRoundedIcon)`
  font-size: 71px;

  color: ${({ theme }) => theme.palette.accent.dark};

  pointer-events: none;
`;

export const NotAllowedImageIcon = styled(DoNotDisturbAltRoundedIcon)`
  font-size: 71px;

  color: ${({ theme }) => theme.palette.accent.dark};

  pointer-events: none;
`;
