import { styled } from '@mui/material/styles';

export const AdTypeContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 28px;
  }
`;

export const ModalForm = styled('form')`
  display: flex;
  flex-direction: column;
`;

export const TitleText = styled('p')`
  width: 100%;
  word-wrap: break-word;
  margin: 0 auto;
  margin-bottom: 20px;

  font-size: 16px;
  line-height: 1.38;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 28px;

    font-size: 20px;
    line-height: 1.2;
  }
`;
