import { styled } from '@mui/material/styles';

export const ModalContainer = styled('div')`
  display: flex;
  flex-direction: column;

  width: calc(${({ theme }) => theme.breakpoints.values.mobileMid}px - 50px);
  max-width: 100%;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 608px;
    padding: 0 60px;

    &.secondStep {
      padding-top: 20px;
    }
  }
`;
