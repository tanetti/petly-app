import { styled } from '@mui/material/styles';

export const FilledButton = styled('button')`
  min-width: 120px;
  width: 100%;
  padding: 8px 28px;

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

  cursor: pointer;

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
