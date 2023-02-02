import { styled } from '@mui/material/styles';
export const DropdownMenu = styled('div')`
  position: relative;
  display: inline-block;
  margin-bottom: 4px;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 4px;
  }
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    margin-bottom: 8px;
  }
  & button {
    border: none;
    background-color: inherit;
    padding: 0;
    font-style: normal;
    font-weight: 500;
    text-align: left;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 1, 33;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.text.black};
    display: inline-block;
    &:hover {
      color: ${({ theme }) => theme.palette.accent.main};
    }
    ${({ theme }) => theme.breakpoints.up('tablet')} {
      font-size: 14px;
      line-height: 1, 35;
    }
    ${({ theme }) => theme.breakpoints.up('desktop')} {
      font-size: 16px;
      line-height: 1.37;
    }
  }
  & ul {
    display: block;
    position: absolute;
    list-style: none;
    min-width: 120px;
    background: #ffffff;
    border: 1px solid #f59256;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 12px;
    z-index: 1;
    & li {
      margin-bottom: 4px;

      &:last-child {
        margin-bottom: 0;
      }
      & p {
        font-size: 12px;
        line-height: 1, 33;
        display: block;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
