import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

export const Item = styled('li')`
display:flex;
flex-direction: column;
  width: 280px;
  position: relative;
  background: ${({theme})=>theme.palette.background.main};
  border-radius: 0px 0px 20px 20px;

    
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 336px;
    
    
    border-radius: 0px 0px 40px 40px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    width: 288px;
      
  }
`;
export const BoxImg = styled('div')``;

export const Wrapper = styled('div')`
display: flex;
align-items: center;
position: absolute;
left: 0px;
top: 12px;
`;

export const Img = styled('img')`
    width: 100%;
    height:288px;
  object-fit: cover;
  display: block;
  
  }
`;

export const Cover = styled('div')`

display: flex;
align-items: center;
padding-left:20px;
border-radius: 0 14px 14px 0;
background: rgba(255, 255, 255, 0.6);
width: 158px;
height: 28px;
font-size: 12px;
line-height: 15px;
letter-spacing: 0.04em;
`;



export const FavBtn = styled('button')`
display: flex;
justify-content: center;
align-items: center;
background: rgba(255, 255, 255, 0.6);
margin:0;
border: none;
margin-left:66px;
width: 44px;
height: 44px;
border-radius: 50%;



${({ theme }) => theme.breakpoints.up('tablet')} {
margin-left:122px;
}

${({ theme }) => theme.breakpoints.up('desktop')} {
margin-left:74px;
}

`;
export const LogoAdd = styled(FavoriteBorderIcon)`
color:${({ theme }) => theme.palette.primary.main};



width: 24px;
`;

export const LogoDel= styled(FavoriteIcon)`
color:${({ theme }) => theme.palette.primary.main};


width: 24px;
`;


export const BoxInfo = styled('div')`
padding: 20px;
display: flex;
flex-direction: column;
flex-grow: 1;

`;

export const BoxTitle = styled('div')`
display:flex;
align-items: center;
height: 76px;
`;

export const Title = styled('p')`

align-items: center;
margin:0;
margin-bottom:20px;
  display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
  
font-weight: 700;
font-size: 28px;
line-height: 38px;
letter-spacing: -0.01em;
color:${({ theme }) => theme.palette.text.primary};

  
`;

export const PetInfo = styled('ul')`
grid-template-columns: auto 1fr;
grid-column-gap: 40px;
grid-row-gap: 8px;
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    grid-column-gap: 37px;
  }

list-style:none;

font-size: 16px;
line-height: 22px;

color:${({ theme }) => theme.palette.text.primary};
display: grid;
  
`;
export const ItemInfo = styled('li')`
// padding:0;
// display: flex;
// position:relative;


&:not(:last-of-type) {
    margin-bottom: 8px;
  }

`;
export const NameInfo = styled('span')`
`;
export const ValueInfo = styled('div')`
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;

`;

export const BoxBtn = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
// flex-grow:1;
margin-left:20px;
margin-right:20px;
margin-bottom: 12px;
height:88px;
`;

export const CardBtn = styled('button')`
display:flex;
justify-content: center;
align-items: center;
gap: 15px;

width:100%;
height: 38px;
background:${({ theme }) => theme.palette.background.main};
color:${({ theme }) => theme.palette.primary.main};
border: 2px solid ${({ theme }) => theme.palette.primary.main};
border-radius: 19px;

&:not(:last-of-type) {
    margin-bottom: 12px;
}

transition: ${({ theme }) =>
    theme.transitions.create(['border-color','background-color','color'], {
      duration: theme.transitions.duration.standard,
    })};

&:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
    border-color: ${({ theme }) => theme.palette.accent.dark};
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.accent.dark};
    color: ${({ theme }) => theme.palette.text.white};
    border-color: ${({ theme }) => theme.palette.accent.dark};
  }
`;

export const DelIcon = styled(DeleteForeverRoundedIcon)`
height: 17.5px;
`;


