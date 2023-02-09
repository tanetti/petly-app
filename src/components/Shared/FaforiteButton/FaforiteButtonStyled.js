import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { LoadingButton } from '@mui/lab';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { OutlinedButton } from '../OutlinedButtonStyled';

export const ModalButton = styled(OutlinedButton)`
  width: 100%;
  padding: 6px 18px;

  font-family: inherit;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.palette.accent.main};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 180px;
  }
`;

export const RoundButton = styled(LoadingButton)`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;

  min-width: 44px;
  width: 44px;
  height: 44px;
  padding: 0;

  color: ${({ theme }) => theme.palette.background.light};
  background-color: ${({ theme }) => theme.palette.background.light};

  backdrop-filter: blur(2px);

  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.accent.light};
  }
`;

export const TextContainer = styled(motion.span)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconSet = styled(motion.span)`
  display: block;
  position: relative;

  width: 30px;
  height: 30px;
`;

export const DefaultBackgroundIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 3px;
  left: 1px;

  width: 28px;
  height: 28px;
`;

export const DefaultFrontIcon = styled(FavoriteBorderOutlinedIcon)`
  position: ${({ variant }) => (variant === 'modal' ? 'static' : 'absolute')};
  top: 2px;
  left: 0;

  width: ${({ variant }) => (variant === 'modal' ? '20px' : '30px')};
  height: ${({ variant }) => (variant === 'modal' ? '20px' : '30px')};

  color: ${({ theme, variant }) =>
    variant === 'modal' ? 'inherit' : theme.palette.accent.main};
`;

export const InFavoriteIcon = styled(FavoriteIcon)`
  position: ${({ variant }) => (variant === 'modal' ? 'static' : 'absolute')};
  top: 2px;
  left: 0;

  width: ${({ variant }) => (variant === 'modal' ? '20px' : '30px')};
  height: ${({ variant }) => (variant === 'modal' ? '20px' : '30px')};

  color: ${({ theme, variant }) =>
    variant === 'modal' ? 'inherit' : theme.palette.accent.main};
`;
