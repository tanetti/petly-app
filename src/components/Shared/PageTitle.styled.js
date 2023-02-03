import { styled } from '@mui/material/styles';

export const PageTitle = styled('h2')`
margin-bottom: 28px;
text-align: center;
font-weight: 700;
font-size: 24px;
line-height: 33px;
color: ${({ theme }) => theme.palette.text.primary};


${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 48px;
line-height: 66px;
margin-bottom: 40px;
}
`;