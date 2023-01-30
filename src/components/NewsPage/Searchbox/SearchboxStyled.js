import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


export const SearchButton = styled('button')`
position: relative;
bottom: 97%;
left:93%;
display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  padding: 0;
  border-radius: 50%;
  background-color: transparent;
  width: 40px;
  height: 40px;
  
`

export const OpenSearch = styled(SearchIcon)`
color: ${({ theme }) => theme.palette.accent.main};
  width: 12px;
  height: 12px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 20px;
    height: 20px;
  }
`

export const CloseSearch = styled(CloseIcon)`
color: ${({ theme }) => theme.palette.accent.main};
  width: 12px;
  height: 12px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 20px;
    height: 20px;
  }
`
export const Input = styled('input')` 
width: 100%;
height: 100%;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 20px;
border:0;
border-color: #FFFFFF;
text-indent: 20px;
&:focus, &:hover {
  border:2px;
  outline-color: ${({ theme }) => theme.palette.accent.main}
}
`


