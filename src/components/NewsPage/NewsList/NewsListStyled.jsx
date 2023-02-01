import { styled } from '@mui/material/styles';

export const ListNews = styled('ul')`
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 40px;
  padding: 0;
  justify-content: center;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: grid;
  max-width: (100vw-40px);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    margin-top: 10px;
    margin-bottom: 0;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ItemNews = styled('li')`
height: 312px;
position: relative;
max-width:100%;
margin-bottom: 40px;
${({ theme }) => theme.breakpoints.up('tablet')} {
   height :276px ;
   /* max-width: 336px; */
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    height: 254px;
  }
`
export const ColorBlock = styled('div')`
height: 8px;
width: 240px;
background: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
border-radius: 40px;
${({ theme }) => theme.breakpoints.up('tablet')} {
   width: 280px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
   width: 340px;
  }
`
export const TitleArticle = styled('div')`
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient:vertical;
height: 66px;
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 33px;
letter-spacing: -0.01em;
overflow: hidden;
margin-bottom: 16px;

${({ theme }) => theme.breakpoints.up('tablet')} {
  
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
  
  }
`
export const DescriptionUp = styled('button')`
display: block;
position: relative;
font-size: 16px;
width: 100%;
line-height: 22px;
background-color: #ffff;
opacity: 1;
z-index: 55;
padding: 20px;
border-radius: 20px;
border: 2px solid ${({ theme }) => theme.palette.accent.main};
bottom: 63%;


${({ theme }) => theme.breakpoints.up('tablet')} {
 width: 100%;
 bottom:60%}

  ${({ theme }) => theme.breakpoints.up('desktop')} {
width: 100%;
  }
`
export const Description = styled('button')`
/* display: -webkit-box;
-webkit-line-clamp: 8;
-webkit-box-orient:vertical; */
background-color: transparent;
border: none;
position: relative;
  /* font-size: 16px;
  font-weight: 400px;
  max-height: 176px;
  overflow: hidden; */
margin-bottom: 20px;
text-align: justify;  
line-height: 22px;
transition: cubic-bezier(0.075, 0.82, 0.165, 1);

${({ theme }) => theme.breakpoints.up('tablet')} {
  height: 132px;
  -webkit-line-clamp: 5;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
height: 110px;
line-height: 22px;
margin-bottom: 40px;
-webkit-line-clamp: 5;
    }
`

export const DescriptionText = styled('div')`
display: -webkit-box;
-webkit-line-clamp: 8;
-webkit-box-orient:vertical;
position: relative;
font-size: 16px;
font-weight: 400px;
max-height: 176px;
overflow: hidden;
margin-bottom: 20px;
text-align: justify;  
line-height: 22px;
transition: cubic-bezier(0.075, 0.82, 0.165, 1);

${({ theme }) => theme.breakpoints.up('tablet')} {
  height: 132px;
  -webkit-line-clamp: 5;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
height: 110px;
line-height: 22px;
margin-bottom: 40px;
-webkit-line-clamp: 5;
    }
`
export const AddBlock = styled('div')`
padding: 0 4px;
display: flex;
height: 22px;
align-items: center;
justify-content: space-between;
`

export const Date = styled('p')`
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: rgba(17, 17, 17, 0.6);
`
export const Link = styled('a')`
text-align: right;
text-decoration-line: underline;
color: ${({ theme }) => theme.palette.accent.main}
`