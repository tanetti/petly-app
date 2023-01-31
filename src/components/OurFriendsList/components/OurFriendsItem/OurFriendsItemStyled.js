import { styled } from '@mui/material/styles';
export const Item = styled('li')`
  text-align: center;
  min-width: 280px;

  padding: 12px 4px 12px 4px;
  background: ${({ theme }) => theme.palette.background.main};
  border-radius: 20px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    min-width: 336px;
    min-height: 246px;
    padding: 16px 17px 16px 4px;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 40px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    min-width: 395px;
    min-height: 287px;
    padding: 14px 4px 12px 4px;
  }
`;
export const ItemTitle = styled('a')`
  color: ${({ theme }) => theme.palette.accent.main};
  text-decoration: underline;
  text-align: center;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 700;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 16px;
    line-height: 1.37;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    font-size: 20px;
    line-height: 1, 35;
  }
`;
export const Box = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
  margin-top: 12px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    grid-gap: 20px;
    margin-top: 16px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    grid-gap: 16px;
  }
`;

export const BoxContact = styled('div')`
  text-align: left;
  & div {
  }
  & p {
    font-style: normal;
    font-size: 12px;
    line-height: 1.33;
    margin-top: 0;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.palette.text.black};

    padding: 0;
    &:last-child {
      margin-bottom: 0;
    }
    ${({ theme }) => theme.breakpoints.up('tablet')} {
      font-size: 14px;
      line-height: 1.35;
      margin-bottom: 8px;
    }
    ${({ theme }) => theme.breakpoints.up('desktop')} {
      font-size: 16px;
      line-height: 1.37;
      margin-bottom: 12px;
    }
  }
  & a {
    color: inherit;
    text-decoration: underline;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.palette.accent.main};
    }
  }
`;
export const BoxImg = styled('div')`
  min-width: 110px;
  min-height: 78px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    min-width: 120px;
    min-height: 85px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    min-width: 158px;
    min-height: 112px;
  }
  & img {
    display: block;
    max-width: 100%;
  }
`;
