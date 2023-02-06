import { styled } from '@mui/material/styles';
import maleBgImage from 'images/male-sign.svg';
import femaleBgImage from 'images/female-sign.svg';

export const ModalForm = styled('form')`
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;
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

export const ImageContainer = styled('div')`
  position: relative;

  & > div {
    margin: 0 auto 20px 0;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      margin: 0 auto 28px 0;
    }
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

export const SexContainer = styled('div')`
  display: flex;
  padding-top: 8px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    padding-top: 16px;
  }
`;

export const CheckboxContainer = styled('div')`
  position: relative;
  width: 40px;
  height: 40px;
  margin-bottom: 71px;

  &:not(:last-child) {
    margin-right: 40px;
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 60px;
    height: 60px;
    margin-bottom: 87px;

    &:not(:last-child) {
      margin-right: 83px;
    }
  }
`;

export const CheckboxLabel = styled('label')`
  &:before {
    position: absolute;
    display: block;
    content: '';
    width: 40px;
    height: 40px;

    top: 0px;
    left: 0px;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      width: 60px;
      height: 60px;
    }
  }

  &.male:before {
    background: url(${maleBgImage}) center / contain no-repeat;
  }

  &.female:before {
    background: url(${femaleBgImage}) center / contain no-repeat;
  }

  & > p {
    margin-top: 52px;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      margin-top: 80px;
    }
  }

  & > p.isActive {
    color: ${({ theme }) => theme.palette.accent.main};
  }
`;

export const CheckboxInput = styled('input')`
  display: none;
`;

export const CommentsContainer = styled('div')`
  width: 100%;
`;

export const TextareaContainer = styled('div')`
  position: relative;
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

export const TextareaErrorContainer = styled('p')`
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

  opacity: 0;

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

  &.isError {
    opacity: 1;
  }
`;
