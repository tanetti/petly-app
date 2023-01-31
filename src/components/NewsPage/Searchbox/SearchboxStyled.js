import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export const OpenSearch = styled(SearchIcon)`
position: relative;
top: 32px;
left:90%;
color: ${({ theme }) => theme.palette.accent.main};
 
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
export const CloseSearch = styled(CloseIcon)`
position: relative;
top: 32px;
left:90%;
color: ${({ theme }) => theme.palette.accent.main};
  width: 14.5px;
  height: 14.5px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 17px;
    height: 17px;
     position: relative;
     top: 32px;
left:93%
  }
`
export const Input = styled('input')` 
width: 100%;
height: 40px;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 20px;
border:0;
border-color: #FFFFFF;
text-indent: 20px;
margin-bottom: 60px;
&:focus, &:hover {
  border:2px;
  outline-color: ${({ theme }) => theme.palette.accent.main}
}
`


