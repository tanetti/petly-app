import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { LoadingButton } from '@mui/lab';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const StyledButton = styled(LoadingButton)`
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

export const IconSet = styled(motion.div)`
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
  position: absolute;
  top: 2px;
  left: 0;

  width: 30px;
  height: 30px;

  color: ${({ theme }) => theme.palette.accent.main};
`;

export const InFavoriteIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 2px;
  left: 0;

  width: 30px;
  height: 30px;

  color: ${({ theme }) => theme.palette.accent.main};
`;
