import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const AvatarContainer = styled(motion.div)`
  position: relative;

  flex-shrink: 0;

  container-type: inline-size;

  border-bottom-right-radius: ${({ variant }) =>
    variant === 'modal' ? '40px' : null};
  border-bottom-left-radius: ${({ variant }) =>
    variant === 'modal' ? '40px' : null};

  overflow: ${({ variant }) => (variant === 'modal' ? 'hidden' : null)};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: ${({ variant }) => (variant === 'modal' ? '288px' : 'auto')};
    height: ${({ variant }) => (variant === 'modal' ? '328px' : 'auto')};
  }
`;

export const CategoryBadge = styled('p')`
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;

  width: 158px;
  height: 28px;
  padding: 6px 20px;

  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.04em;

  background-color: ${({ theme }) => theme.palette.background.light};

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  backdrop-filter: blur(2px);

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Loader = styled('div')`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
`;

export const Avatar = styled('img')`
  width: 100cqw;
  height: 100cqw;

  object-fit: cover;

  opacity: ${({ shouldShown }) => (shouldShown ? '1' : '0')};

  transition: ${({ theme }) =>
    theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 100%;
    min-height: 100%;
    height: ${({ variant }) => (variant === 'modal' ? '328px' : '288px')};
  }
`;
