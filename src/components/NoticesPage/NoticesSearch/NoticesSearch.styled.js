// import styled from 'styled-components';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

export const Form = styled('form')`
display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  padding-left: 12px;
  padding-right: 12px;
  width: 280px;
  margin: 0 auto 28px auto;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.background.main};
  border-radius: 20px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
      width: 608px;
      height: 44px;
      border-radius: 22px;
      padding-left: 20px;
  padding-right: 15px;
  margin-bottom: 40px;
    }
`;

export const Input = styled('input')`
  border: none;
  margin: 0;
  outline: none;  
    
  font-size: 16px;
  
  ::placeholder {
  ${({ theme }) => theme.palette.text.searchPlaceholder};}
  
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 20px;
  }
  
`;

export const Button = styled(SearchIcon)`
  
  
  border: none;
  margin: 0;
  padding: 0;
  font-size: 14.57px;
  
  line-height: 30px;
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 17.49px;
  }
  
`;
