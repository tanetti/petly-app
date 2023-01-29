import styled from "@emotion/styled";

export const Button = styled.button`   
display: inline-block;
padding: 0px;
font-family: Manrope;
font-weight: 500;
font-size: 16px;
line-height: 1.38;
letter-spacing: 0.04em;
text-align: center;
color: ${({ theme }) => theme.palette.semiTransparentBlack.main};
border: 0;
background-color: ${({ theme }) => theme.palette.background.main};
`