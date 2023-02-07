import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

export const SearchContainer = styled('div')`
  position: relative;

  width: 100%;
  margin-bottom: 28px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    max-width: 608px;
    margin: 0 auto 40px auto;
  }
`;

export const SeachField = styled('input')`
  width: 100%;
  padding: 9px 40px 9px 12px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  background-color: ${({ theme }) => theme.palette.background.main};

  border-width: 0;
  border-radius: 20px;

  outline-width: 2px;
  outline-style: solid;
  outline-offset: -2px;
  outline-color: transparent;

  box-shadow: ${({ theme }) => theme.shadows[50]};

  text-overflow: ellipsis;

  transition: ${({ theme }) =>
    theme.transitions.create(['outline-color'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    padding: 9px 40px 9px 20px;

    font-size: 20px;
    line-height: 1.35;
  }

  &:hover {
    outline-color: ${({ theme }) => theme.palette.accent.light};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.palette.accent.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.text.searchPlaceholder};
  }
`;

export const ClearButton = styled(LoadingButton)`
  position: absolute;
  top: 50%;
  right: 2px;

  display: grid;
  place-items: center;

  min-width: 36px;
  width: 36px;
  height: 36px;
  padding: 0;

  font-size: 21px;

  border-radius: 50%;

  color: ${({ theme }) => theme.palette.text.primary};
  background-color: transparent;

  transform: translateY(-50%);

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'background-color'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    right: 4px;

    font-size: 24px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
    background-color: ${({ theme }) => theme.palette.background.dark};
  }

  &:disabled {
    color: ${({ theme }) => theme.palette.text.primary};
  }

  & > div {
    display: grid;
    place-items: center;

    width: 100%;
    height: 100%;
  }
`;

export const SearchIcon = styled(SearchRoundedIcon)`
  font-size: inherit;
`;

export const ClearIcon = styled(ClearRoundedIcon)`
  font-size: inherit;
`;
