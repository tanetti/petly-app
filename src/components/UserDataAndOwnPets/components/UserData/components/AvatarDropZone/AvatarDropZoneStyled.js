import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { ReactComponent as AddImageIconSvg } from 'images/add-image-icon.svg';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import DoNotDisturbAltRoundedIcon from '@mui/icons-material/DoNotDisturbAltRounded';

export const DropZoneContainer = styled('div')`
  width: 100%;

  border-radius: 50%;

  overflow: hidden;

  box-shadow: ${({ theme }) => theme.shadows[52]};

  container-type: inline-size;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 233px;
    height: 233px;
  }
`;

export const InnerContainer = styled('div')`
  position: relative;

  display: grid;
  place-items: center;

  width: 100cqw;
  height: 100cqw;
`;

export const CurrentImage = styled(motion.img)`
  height: 100%;

  object-fit: cover;
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

  border-radius: 50%;

  cursor: pointer;

  outline-offset: -2px;
  outline-color: ${({ theme }) => theme.palette.accent.main};

  overflow: hidden;

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

  background-color: ${({ theme }) => theme.palette.background.light};

  border-radius: 50%;

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
