import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export const Title = styled('h1')`
  font-weight: 700;
  font-size: 24px;
  line-height: 1, 37;
  margin: 0;
  margin-bottom: 5px;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.black};
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 48px;
    margin-bottom: 10px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    font-size: 48px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const FormSearch = styled('form')`
width: (100vw - 40px);
margin-left: auto;
margin-right: auto;
/* margin-bottom: 10px; */
z-index: 55;
${({ theme }) => theme.breakpoints.up('tablet')} {
max-width:608px;
margin-bottom: 40px;

  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
  }
`
export const OpenSearch = styled(SearchIcon)`
position: relative;
top: 32px;
left:90%;
color: ${({ theme }) => theme.palette.text.black};
  width: 14.5px;
  height: 14.5px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  width: 17px;
  height: 17px;
  position: relative;
  top: 32px;
  left:93%;
  }
`
export const SearchButton = styled("button")`
position: relative;
background-color: transparent;
border: none;
z-index: 99;
`

export const CloseSearch = styled(CloseIcon)`
position: relative;
top: 32px;
left:90%;
color: ${({ theme }) => theme.palette.text.black};
border: 1px solid ${({ theme }) => theme.palette.text.black};
border-radius: 50%;
  width: 14.5px;
  height: 14.5px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
  width: 17px;
  height: 17px;
  left:93%
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
  
width: 60%;
  }
`
export const NoNewsImg = styled("div")`
  max-width: 276px;
  margin-left: auto;
  margin-right: auto;
  `