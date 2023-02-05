import { styled } from '@mui/material/styles';

export const PageTitle = styled('h2')`
  padding: 10px 0 28px 0;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.38;

  color: ${({ theme }) => theme.palette.text.primary};

  text-align: center;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    padding: 40px 0;

    font-size: 48px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    padding: 23px 0 40px 0;
  }
`;
