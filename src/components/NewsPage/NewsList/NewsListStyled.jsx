import { styled } from '@mui/material/styles';

export const ListNews = styled('ul')`
  grid-template-columns: repeat(1, 1fr);
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
    margin-top: 0;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    grid-template-columns: repeat(3, 1fr);

  }
`;

export const ItemNews = styled('li')`
height: 312px;
position: relative;
max-width:100%;
margin-bottom: 53px;
${({ theme }) => theme.breakpoints.up('tablet')} {
  margin-bottom: 28px;
   height :276px ;
   scroll-margin-bottom: 20px;
   max-width: 336px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    height: 254px;
  }
`
export const ColorBlock = styled('div')`
height: 8px;
width: 240px;
margin-bottom: 4px;
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
`
export const DescriptionUp = styled('button')`
display: block;
position: relative;
font-size: 16px;
width: 100%;
line-height: 22px;
background-color: ${({ theme }) => theme.palette.background.main};
opacity: 1;
z-index: 55;
padding: 20px;
border-radius: 20px;
border: 2px solid ${({ theme }) => theme.palette.accent.main};
bottom: 220px;
${({ theme }) => theme.breakpoints.up('tablet')} {
 width: 100%;
 bottom:60%}
  ${({ theme }) => theme.breakpoints.up('desktop')} {
  }
  `
export const Description = styled('button')`
background-color: transparent;
border: none;
position: relative;
margin-bottom: 20px;
text-align: justify;  
line-height: 22px;
transition: cubic-bezier(0.075, 0.82, 0.165, 1);
${({ theme }) => theme.breakpoints.up('tablet')} {
  height: 132px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
height: 110px;
margin-bottom: 40px;
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
  -webkit-line-clamp: 6;
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
margin: 0;
color:${({ theme }) => theme.palette.semiTransparentBlack.main};
`
export const Link = styled('a')`
text-align: right;
text-decoration: underline;
text-decoration-color: ${({ theme }) => theme.palette.accent.main};
text-decoration-style: solid;
text-decoration-thickness: 1px;

color: ${({ theme }) => theme.palette.accent.main}
`