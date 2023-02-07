import { styled } from '@mui/material/styles';

export const PopoverAnchor = styled('span')`
  cursor: pointer;

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};

  &:hover {
    color: ${({ theme }) => theme.palette.accent.main};
  }
`;

export const PopoverContainer = styled('span')`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 4px;
  justify-items: center;
  grid-column-gap: 15px;

  font-size: 12px;
  line-height: 1.33;

  padding: 12px;
`;

export const PopoverItem = styled('span')`
  color: ${({ isThisDay, theme }) =>
    isThisDay ? theme.palette.accent.main : 'inherit'};
`;
