import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { FilledButton, OutlinedButton } from 'components/Shared';

export const ModalContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.values.mobileMid}px;
  margin: 0 auto;
  padding: 0;

  &.firstStep {
    padding-top: 8px;
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    max-width: ${({ theme }) => theme.breakpoints.values.tablet}px;
    padding: 0 60px;

    &.firstStep {
      padding-top: 20px;
    }

    &.secondStep {
      padding: 0 86px;
    }
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    max-width: ${({ theme }) => theme.breakpoints.values.desktop}px;
  }
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: column-reverse;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    flex-direction: row;
    margin: 0 auto;
  }
`;

export const ImageContainer = styled('div')`
  position: relative;

  & > div {
    overflow: hidden;
    display: flex;
    width: 208px;
    height: 208px;
    margin: 0 auto 20px;
    border-radius: 20px;
    box-shadow: none;
    background-color: ${({ theme }) => theme.palette.background.dark};

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      width: 182px;
      height: 182px;
      margin-bottom: 40px;
      border-radius: 40px;
    }
  }

  & > div > div > div > div {
    background-color: ${({ theme }) => theme.palette.background.dark};
  }
`;

export const TextareaContainer = styled('div')`
  position: relative;
`;

export const ModalInput = styled(TextField)`
  position: relative;

  font-family: 'Manrope';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 16px;
    line-height: 1.63;
  }

  & .MuiInputBase-root {
    width: 240px;
    height: 39px;

    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;

    border-radius: 40px;

    background-color: ${({ theme }) => theme.palette.background.dark};

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      width: 448px;
      height: 47px;
    }
  }

  & .MuiInputBase-root:hover fieldset {
    border-color: ${({ theme }) => theme.palette.accent.main};
  }

  & fieldset {
    padding-left: 22px;

    border-radius: 40px;

    border-color: ${({ theme }) => theme.palette.accent.light};

    transition: ${({ theme }) =>
      theme.transitions.create(['border-color'], {
        duration: theme.transitions.duration.standard,
      })};
  }

  & input {
    height: 17px;
    padding: 11px 14px;

    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;

    color: ${({ theme }) => theme.palette.text.primary};

    background-color: ${({ theme }) => theme.palette.background.dark};

    border-radius: 40px;

    overflow: hidden;
    text-overflow: ellipsis;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      height: 27px;
      padding: 11px 16px;
    }
  }

  & > p {
    position: absolute;
    bottom: -7px;
    right: 14px;

    max-width: 230px;
    margin: 0 10px;
    padding: 0 4px;

    font-family: inherit;
    font-size: 11px;
    line-height: 1.3;

    background-color: ${({ theme }) => theme.palette.background.main};

    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.palette.error.main};
    border-radius: 8px;

    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      bottom: -8px;

      font-size: 12px;
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      margin-bottom: 28px;
    }
  }

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const Label = styled('label')`
  margin-bottom: 8px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.44;
  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    max-width: ${({ theme }) => theme.breakpoints.values.tablet}px;
    margin-bottom: 12px;

    font-size: 24px;
    line-height: 1.08;
  }
`;

export const ModalFilledButton = styled(FilledButton)`
  width: 240px;
  height: 40px;
  margin-bottom: 12px;

  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 180px;
    height: 44px;
    margin-bottom: 0px;

    font-size: 20px;
    line-height: 1.35;
  }
`;

export const ModalOutlinedButton = styled(OutlinedButton)`
  width: 240px;
  height: 40px;
  margin-bottom: 0 !important;

  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 180px;
    height: 44px;
    margin-right: 20px;

    font-size: 20px;
    line-height: 1.35;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    margin-right: 24px;
  }
`;

export const ModalStepTwoDescription = styled('p')`
  margin: 0 auto;
  margin-bottom: 20px;

  font-size: 16px;
  line-height: 1.38;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Textarea = styled('textarea')`
  width: 240px;
  height: 100px;
  padding: 12px 14px;

  border-style: solid;
  border-radius: 20px;
  border-color: ${({ theme }) => theme.palette.accent.light};
  outline: none;
  resize: none;
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.dark};

  font-family: 'Manrope';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.86;
  transition: ${({ theme }) =>
    theme.transitions.create(['border-color'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 394px;
    height: 116px;
    padding: 16px;
    margin-bottom: 40px;

    font-size: 16px;
    line-height: 1.63;
  }

  &:hover {
    border-color: ${({ theme }) => theme.palette.accent.main};
  }

  &.isError {
    border-color: ${({ theme }) => theme.palette.error.main};
  }

  & + p {
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

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      top: -8px;

      font-size: 12px;
    }
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

export const ImageErrorLabel = styled('p')`
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 12px;
  line-height: 1.2;
  color: ${({ theme }) => theme.palette.error.main};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    top: 89%;

    font-size: 14px;
  }
`;
