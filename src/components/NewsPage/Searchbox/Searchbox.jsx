import React  from 'react';
import {Input} from './SearchboxStyled';
export const Searchbox = ({ value, onChange }) => {
 
  return (
    <>
    <Input
    type='text'
      value = {value}
      placeholder='Search news'
        onChange={e => onChange(e.target.value)}>
      </Input>
 </>
  )     
}
  
