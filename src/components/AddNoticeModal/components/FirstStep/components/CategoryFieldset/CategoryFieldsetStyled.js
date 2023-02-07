import { styled } from '@mui/material/styles';

export const CategoryFieldsetContainer = styled('fieldset')`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  margin-bottom: 32px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 28px;
  }
`;

export const InvisibleCategoryFieldsetLegend = styled('legend')`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const CategoryCheckboxLabel = styled('label')`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: 80px;
  height: 38px;
  padding: 0 28px;

  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.main};

  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.accent.main};
  border-radius: 40px;

  cursor: pointer;

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'background-color', 'border-color'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    height: 47px;

    font-size: 20px;
    line-height: 1.35;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
    border-color: ${({ theme }) => theme.palette.accent.dark};
  }

  &:has(input:checked) {
    color: ${({ theme }) => theme.palette.text.white};
    border-color: ${({ theme }) => theme.palette.accent.main};
    background-color: ${({ theme }) => theme.palette.accent.main};

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.palette.accent.dark};
      border-color: ${({ theme }) => theme.palette.accent.dark};
    }
  }

  &:has(input:focus) {
    background-color: ${({ theme }) => theme.palette.accent.dark};
    border-color: ${({ theme }) => theme.palette.accent.dark};
  }
`;
