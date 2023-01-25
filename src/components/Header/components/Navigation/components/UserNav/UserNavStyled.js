import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const AccountIcon = styled(AccountCircleIcon)`
  margin-right: 12px;

  font-size: 20px;

  color: inherit;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 28px;
  }
`;
