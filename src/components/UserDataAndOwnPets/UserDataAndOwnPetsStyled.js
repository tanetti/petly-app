import { styled } from '@mui/material/styles';

export const UserPageContainer = styled('div')`
  padding-top: 33px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    padding-top: 60px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    display: flex;
    gap: 32px;

    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.values.desktop}px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
    padding-bottom: 20px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
