import { styled } from '@mui/material/styles';

export const AdTypeContainer = styled('div')``;

export const ModalForm = styled('form')`
  display: flex;
  flex-direction: column;

  padding-top: 8px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    padding-top: 20px;
  }
`;

export const TitleText = styled('p')`
  margin: 0 auto;
  margin-bottom: 20px;

  font-size: 16px;
  line-height: 1.38;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 20px;
    line-height: 1.2;
  }
`;
