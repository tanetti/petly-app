import { styled } from '@mui/material/styles';
import { Container } from 'components/Shared';

export const UserContainer = styled(Container)`
  position: relative;

  padding: 24px 20px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    padding: 10px 32px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    padding: 10px 0;
  }
`;
