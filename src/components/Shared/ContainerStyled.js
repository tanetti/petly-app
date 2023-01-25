import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.values.mobileMid}px;
  margin: 0 auto;
  padding: 16px 20px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    max-width: ${({ theme }) => theme.breakpoints.values.tablet}px;
    padding: 24px 32px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    max-width: ${({ theme }) => theme.breakpoints.values.desktop}px;
    padding: 20px 16px;
  }
`;
