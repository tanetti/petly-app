import { styled } from '@mui/material/styles';
export const Heading = styled('h1')`
  font-weight: 700;
  font-size: 24px;
  line-height: 1, 37;
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.black};
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 48px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    font-size: 48px;
  }
`;
