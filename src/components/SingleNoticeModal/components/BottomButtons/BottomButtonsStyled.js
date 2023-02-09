import { styled } from '@mui/material/styles';

export const ButtonsContainer = styled('div')`
  padding-top: 40px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    gap: 12px;

    padding-top: 32px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
