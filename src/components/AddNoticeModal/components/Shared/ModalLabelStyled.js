import { styled } from '@mui/material/styles';

export const ModalLabel = styled('label')`
  display: block;
  margin-bottom: 8px;

  font-size: 18px;
  line-height: 1.44;

  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 12px;

    font-size: 24px;
    line-height: 1.08;
  }
`;
