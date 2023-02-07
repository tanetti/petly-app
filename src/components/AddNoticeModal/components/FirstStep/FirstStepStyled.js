import { styled } from '@mui/material/styles';

export const ModalForm = styled('form')`
  display: flex;
  flex-direction: column;
`;

export const TitleText = styled('p')`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  width: 100%;
  height: 44px;
  margin: 0 auto;
  margin-bottom: 20px;

  font-size: 16px;
  line-height: 1.38;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.palette.text.primary};

  word-wrap: break-word;
  text-align: center;

  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    height: 50px;
    margin-bottom: 28px;

    font-size: 20px;
    line-height: 1.2;
  }
`;
