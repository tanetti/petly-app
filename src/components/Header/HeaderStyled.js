import { styled } from '@mui/material/styles';
import { Container } from 'components/Shared/ContainerStyled';

export const HeaderContainer = styled(Container)`
  display: flex;

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    gap: 80px;
  }
`;
