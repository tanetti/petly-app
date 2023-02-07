import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const AvatarContainer = styled(motion.div)`
  position: relative;

  container-type: inline-size;
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
    height: 288px;
  }
`;
