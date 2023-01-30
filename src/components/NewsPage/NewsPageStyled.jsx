import { styled } from '@mui/material/styles';

export const Title = styled('h1')`
  font-weight: 700;
  font-size: 24px;
  line-height: 1, 37;
  margin: 0;
  margin-bottom: 28px;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.black};
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 48px;
    margin-bottom: 40px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    font-size: 48px;
    margin-bottom: 40px;
  }
`;

export const FormSearch = styled('form')`
width: (100vw - 40px);
margin-left: auto;
margin-right: auto;
height: 40px;
${({ theme }) => theme.breakpoints.up('tablet')} {
width:608px;
height: 44px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
width: 608px;
height: 44px;
  }
`
export const NoNews = styled("div")`
width: 50%;
height: 66px;
text-align: center;
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 33px;
letter-spacing: -0.01em;
margin-top: 60px;
margin-left:auto;
margin-right: auto;
`
