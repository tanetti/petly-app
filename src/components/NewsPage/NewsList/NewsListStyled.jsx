import { styled } from '@mui/material/styles';

export const ListNews = styled('ul')`
  /* display: grid;
  max-width: (100vw-40px); */
  grid-template-columns: repeat(1, 1fr);
  /* grid-gap: 12px; */
  margin-top: 28px;
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
    margin-top: 40px;
    margin-bottom: 0;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 60px;
  }
`;

export const ItemNews = styled('li')`
height: 312px;
max-width:100%;
margin-bottom: 40px;
${({ theme }) => theme.breakpoints.up('tablet')} {
   height :276px ;
   max-width: 336px;
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
width: 100%;
height: 66px;
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 33px;
letter-spacing: -0.01em;
overflow: hidden;
/* white-space: nowrap; */
text-overflow: ellipsis;
margin-bottom: 16px;

${({ theme }) => theme.breakpoints.up('tablet')} {
  
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
  
  }
`
export const Description = styled('div')`
position: relative;
font-size: 16px;
font-weight: 400px;
max-height: 176px;
overflow-y: hidden;
margin-bottom: 20px;
text-align: justify;  
  padding-right: 1em;
  line-height: 22px;
${({ theme }) => theme.breakpoints.up('tablet')} {
  height: 132px;
  
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
height: 110px;
line-height: 22px;
margin-bottom: 40px;
    }
  &::before{
  content: '...';
  position: absolute;
  right: 0;
  bottom: 0;
  }
  &::after{
  content: "";
  position: absolute;
  right: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  background: white;
  }
`
export const DescriptionUp = styled('div')`
display: none;
position: absolute;
font-size: 16px;
height: 100%;

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