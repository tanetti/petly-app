import { styled } from '@mui/material/styles';
import { Container } from 'components/Shared';

export const RegistrationSection = styled('section')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const RegistrationContainer = styled(Container)`
  display: grid;
  place-items: center;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    flex-grow: 1;
  }
`;
