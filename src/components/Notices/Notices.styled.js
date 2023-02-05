import { styled } from '@mui/material/styles'
import { Button } from '@mui/material';
// import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddIcon from '@mui/icons-material/Add';
export const BtnBox = styled('din')`
display:flex;
justify-content:space-between;
`;

export const AddNoticeButton = styled(Button)`




//   ${({ theme }) => theme.breakpoints.down('tablet')} {
      position: fixed;
  top: 455px;
  right: 20px;
  width:80px;
  height:80px;
  z-index:100;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content:center;
 border-radius: 50%;

  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
line-height: 16px;
color: ${({ theme }) => theme.palette.text.white};
background-color:${({ theme }) => theme.palette.accent.main};
  border-width: 0;  
  text-transform: none;
    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.accent.dark};
        & > div {
            color: ${({ theme }) => theme.palette.text.black};
            transition: ${({ theme }) =>
            theme.transitions.create(['color', 'background-color'], {
            duration: theme.transitions.duration.standard,
            })};
        }
    }

${({ theme }) => theme.breakpoints.up('tablet')} {
      position: static;
      height:44px;


  display: flex;
  flex-direction: row;
  align-items: center;
  gap:12px;  

  font-family: inherit;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: transparent;
  border-width: 0;
  border-radius: 30px;
  text-transform: none;
  & > div > svg {
      fill: ${({ theme }) => theme.palette.text.white};
  }

  &:hover,
  &:active {
    //   color: ${({ theme }) => theme.palette.accent.dark};
        & > div {
    //   color: ${({ theme }) => theme.palette.accent.dark};
width: 16px;
        }
        background-color: ${({ theme }) => theme.palette.background.dark};
        & > div {
            // background-color: ${({ theme }) => theme.palette.accent.dark};
            color: ${({ theme }) => theme.palette.text.black};
            transition: ${({ theme }) =>
            theme.transitions.create(['color', 'background-color'], {
            duration: theme.transitions.duration.standard,
            })};
        }
    }
  }
  
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    
  }

  
  
`;

export const BtnSign = styled('div')`
// display: block;
white-space: nowrap
color: ${({ theme }) => theme.palette.text.white};
${({ theme }) => theme.breakpoints.up('tablet')} {
     display: inline-block;
    white-space: nowrap;
`;

export const WrapperIcon = styled('div')`
border-radius:50%;
display:flex;
align-items: center;
  justify-content:center;


 ${({ theme }) => theme.breakpoints.up('tablet')} {
     width:44px;
     height:44px;
     display:flex;
     align-items: center;
  justify-content:center;

     background-color: ${({ theme }) => theme.palette.accent.main};
    
    

 }
`;

export const AddNoticeIcon = styled(AddIcon)`
  width: 21.3px;
  height: 21.3px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
     width:44px;
     height: 44px;
     
     background-color: ${({ theme }) => theme.palette.accent.main};
    
     border-radius:50%;
 }  
`;