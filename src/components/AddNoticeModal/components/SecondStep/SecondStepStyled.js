import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Autocomplete } from '@mui/material';

export const ModalForm = styled('form')`
  display: flex;
  flex-direction: column;
`;

export const StyledAutocomplete = styled(Autocomplete)`
  margin-bottom: 16px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 28px;
  }

  & .MuiTextField-root {
    margin-bottom: 0;
  }

  & .MuiOutlinedInput-root.MuiInputBase-sizeSmall {
    padding-left: 8px;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      padding-left: 10px;
    }
  }
`;

export const ImageContainer = styled('div')`
  position: relative;

  margin-bottom: 20px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 28px;
  }
`;

export const ImageErrorContainer = styled(motion.p)`
  position: absolute;
  bottom: -24px;
  left: 10px;

  max-width: 230px;
  padding: 0 4px;

  font-family: inherit;
  font-size: 11px;
  line-height: 1.3;

  color: ${({ theme }) => theme.palette.error.main};
  background-color: ${({ theme }) => theme.palette.background.main};

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.error.main};
  border-radius: 8px;

  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    left: 17px;

    font-size: 12px;
  }
`;

export const CommentsContainer = styled('div')`
  width: 100%;
`;

export const TextareaContainer = styled('div')`
  position: relative;

  margin-bottom: 14px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 26px;
  }
`;

export const Textarea = styled('textarea')`
  width: 100%;
  height: 100px;
  padding: 12px 14px;

  font-family: 'Manrope';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.86;

  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.dark};

  border-style: solid;
  border-radius: 20px;
  border-color: ${({ theme }) => theme.palette.accent.light};

  outline: transparent;
  resize: none;

  transition: ${({ theme }) =>
    theme.transitions.create(['border-color'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    height: 116px;
    padding: 16px;

    font-size: 16px;
    line-height: 1.63;
  }

  &:hover {
    border-color: ${({ theme }) => theme.palette.accent.main};
  }

  &.isError {
    border-color: ${({ theme }) => theme.palette.error.main};
  }

  &::-webkit-scrollbar {
    width: 8px;

    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.accent.main};

    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 12px;
    margin-bottom: 12px;

    background-color: ${({ theme }) => theme.palette.semiTransparentBlack.main};

    border-radius: 4px;
  }
`;

export const TextareaErrorContainer = styled(motion.p)`
  position: absolute;
  top: -7px;
  right: 14px;

  max-width: 230px;
  margin: 0 10px;
  padding: 0 4px;

  font-family: inherit;
  font-size: 11px;
  line-height: 1.3;

  color: ${({ theme }) => theme.palette.error.main};
  background-color: ${({ theme }) => theme.palette.background.main};

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.error.main};
  border-radius: 8px;

  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;

  transition: ${({ theme }) =>
    theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    top: -8px;

    font-size: 12px;
  }
`;
