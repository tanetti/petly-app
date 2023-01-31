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
    margin-bottom: 20px;
  }
`;

export const FormSearch = styled('form')`
width: (100vw - 40px);
margin-left: auto;
margin-right: auto;
margin-bottom: 10px;
z-index: 55;
${({ theme }) => theme.breakpoints.up('tablet')} {
width:608px;

  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
width: 608px;

  }
`
export const NoNews = styled("div")`
width: 90%;
height: 66px;
text-align: center;
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 33px;
letter-spacing: -0.01em;
margin-left:auto;
margin-right: auto;
margin-bottom:20px;
${({ theme }) => theme.breakpoints.up('tablet')} {

width: 50%;
  }
`
export const NoNewsImg = styled("div")`
  max-width: 276px;
  margin-left: auto;
  margin-right: auto;
  `