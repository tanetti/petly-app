import { styled } from '@mui/material/styles';

export const SectionTitle = styled('h2')`
  margin-bottom: 18px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 40px;

    font-size: 28px;
    line-height: 1.36;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    margin-bottom: 24px;
  }
`;
