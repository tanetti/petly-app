import { styled } from '@mui/material/styles';
import { Autocomplete } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)`
  & .MuiFormControl-root {
    margin-bottom: 16px;
  }

  & .MuiInputBase-root {
    padding: 0;
    padding-left: 8px;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      padding-left: 26px;
    }
  }

  & .MuiInputBase-input {
    padding: 0;
  }
`;
