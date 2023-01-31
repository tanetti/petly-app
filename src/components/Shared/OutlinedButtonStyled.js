import { styled } from '@mui/material/styles';

export const OutlinedButton = styled('button')`
  min-width: 120px;
  width: 100%;
  padding: 8px 28px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.accent.main};
  border-radius: 40px;

  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.main};

  cursor: pointer;

  transition: ${({ theme }) =>
    theme.transitions.create(['border-color', 'color'], {
      duration: theme.transitions.duration.standard,
    })};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
    border-color: ${({ theme }) => theme.palette.accent.dark};
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  &:disabled {
    color: ${({ theme }) => theme.palette.accent.light};
    border-color: ${({ theme }) => theme.palette.accent.light};
  }
`;