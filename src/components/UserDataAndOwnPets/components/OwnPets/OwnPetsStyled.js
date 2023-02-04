import { styled } from '@mui/material/styles';

export const ButtonContainer = styled('div')`
  position: absolute;
  top: 18px;
  right: 20px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    top: 9px;
    right: 30px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    right: 0;
  }
`;

export const OwnPetsList = styled('ul')`
  padding-top: 14px;
  padding-bottom: 14px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-top: -16px;
    padding-top: 0;
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    margin-top: 0;
  }
`;
