import { styled } from '@mui/material/styles';

export const Tittle = styled('h2')`
  margin-bottom: 58px;

  font-size: 32px;
  line-height: 1.38;

  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 100px;

    font-size: 68px;
    line-height: 1.47;
  }
`;

export const HomeImage = styled('div')`
  flex-grow: 1;

  /* background-color: red; */
`;
