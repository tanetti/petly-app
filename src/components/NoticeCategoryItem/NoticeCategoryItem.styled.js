import { styled } from '@mui/material/styles';

export const Item = styled('li')`
  width: 100%;
  background: ${({theme})=>theme.palette.background.main};
  

  border-radius: 0px 0px 20px 20px;

  ${({ theme }) => theme.breakpoints.up('mobileMid')} {
    width: 336px;
    min-height: 246px;  
    
    border-radius: 0px 0px 40px 40px;
  }
  
  
    
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 336px;
    min-height: 246px;  
    
    border-radius: 0px 0px 40px 40px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    min-width: 395px;
    min-height: 287px;
    
  }
`;

export const Img = styled('img')`
    width: 100%;
  object-fit: cover;
  display: block;
  
  }
`;

export const BoxInfo = styled('div')`
padding: 20px 20px 32px 20px;`;

export const Title = styled('h3')`
margin:0;
margin-bottom:20px;
  // display: flex;
  // flex-wrap: wrap;
  font-weight: 700;
font-size: 28px;
line-height: 38px;
letter-spacing: -0.01em;
  
  
`;

export const PetInfo = styled('ul')`
list-style:none;
margin:0;
padding:0;
`;
export const ItemInfo = styled('li')`
padding:0;
display: flex;
position:relative;
`;
export const NameInfo = styled('span')``;
export const ValueInfo = styled('div')`
position:absolute;
left: +90px;`;
