import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';

export const FilledButton = styled(LoadingButton)`
  min-width: 120px;
  padding: 8px 28px;

  font-family: inherit;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-radius: 40px;

  color: ${({ theme }) => theme.palette.text.white};
  background-color: ${({ theme }) => theme.palette.accent.main};

  text-transform: none;

  transition: ${({ theme }) =>
    theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.standard,
    })};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.accent.dark};
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.accent.light};
  }
`;
