import { styled } from '@mui/material/styles';
import { Container } from 'components/Shared';

export const AuthContainer = styled(Container)`
  display: grid;
  place-items: center;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    flex-grow: 1;
  }
`;
