import { styled } from '@mui/material/styles';

export const InfoContainer = styled('div')`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 8px;

  font-size: 14px;
  line-height: 1.36;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 16px;
    line-height: 1.38;
  }

  & span {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & span:nth-of-type(odd) {
    font-weight: 600;
  }
`;

export const InfoLink = styled('a')`
  color: inherit;

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
  }
`;
