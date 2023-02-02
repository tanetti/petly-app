import { styled } from '@mui/material/styles';


export const Input = styled('input')` 
width: 100%;
height: 40px;
background: ${({ theme }) => theme.palette.background.main};
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 20px;
border:0;
border-color: ${({ theme }) => theme.palette.background.main};
text-indent: 42px;
margin-bottom: 25px;
&:focus, &:hover {
  border:2px;
  outline-color: ${({ theme }) => theme.palette.accent.main}
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 60px;
  }
}
`


