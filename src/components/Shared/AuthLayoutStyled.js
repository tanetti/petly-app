import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const LayoutContainer = styled('div')`
  position: relative;

  width: 100%;
  padding-top: 10px;
  padding-bottom: 20px;

  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 608px;
    padding: 60px 80px 40px 80px;

    background-color: ${({ theme }) => theme.palette.background.main};

    border-radius: 40px;

    box-shadow: ${({ theme }) => theme.shadows[51]};
  }
`;

export const LayoutTitle = styled('h2')`
  margin: 0;
  margin-bottom: 40px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  text-align: center;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-weight: 500;
    font-size: 36px;
    line-height: 1.36;
  }
`;

export const LayoutHint = styled('p')`
  margin: 0;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.palette.semiTransparentBlack.main};

  text-align: center;
`;

export const LayoutHintLink = styled(Link)`
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1px;

  color: ${({ theme }) => theme.palette.blueLink.main};
`;
