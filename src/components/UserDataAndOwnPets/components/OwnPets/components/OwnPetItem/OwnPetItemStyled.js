import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { LoadingButton } from '@mui/lab';

export const PetsItem = styled(motion.li)`
  padding: 16px 20px;

  background-color: ${({ theme }) => theme.palette.background.main};

  border-radius: 20px;

  box-shadow: ${({ theme }) => theme.shadows[51]};

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: flex;
    gap: 32px;

    padding: 20px;

    border-radius: 40px;
  }
`;

export const PetImage = styled('img')`
  margin-bottom: 20px;

  border-radius: 20px;

  object-fit: cover;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 161px;
    height: 161px;

    margin-bottom: 0;

    border-radius: 40px;
  }
`;

export const PetInfo = styled('div')`
  position: relative;

  width: 100%;

  overflow: hidden;
  word-wrap: break-word;

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    padding-bottom: 20px;
  }
`;

export const DeletePetButton = styled(LoadingButton)`
  position: absolute;
  top: -2px;
  right: -2px;

  display: grid;
  place-items: center;

  min-width: 24px;
  width: 24px;
  height: 24px;
  padding: 0;

  font-size: 21px;

  border-radius: 50%;

  color: ${({ theme }) => theme.palette.semiTransparentBlack.main};
  background-color: ${({ theme }) => theme.palette.background.main};

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'background-color'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    top: 0;
    right: 0;

    width: 44px;
    height: 44px;

    font-size: 24px;

    background-color: ${({ theme }) => theme.palette.background.dark};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
    background-color: ${({ theme }) => theme.palette.accent.light};
  }

  &:disabled {
    background-color: transparent;
  }

  & > div {
    display: grid;
    place-items: center;

    width: 100%;
    height: 100%;
  }
`;

export const PetDataItem = styled('p')`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 16px;
    line-height: 1.38;
  }

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  &:last-of-type {
    ${({ theme }) => theme.breakpoints.up('desktop')} {
      padding-top: 4px;
    }
  }
`;

export const DeleteIcon = styled(DeleteForeverRoundedIcon)`
  font-size: inherit;
`;
