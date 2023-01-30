import React, { useState } from 'react';
import { SearchButton, OpenSearch, CloseSearch,Input } from './SearchboxStyled';
export const Searchbox = ({ value, onChange }) => {
  const [changeIcon, setChangeIcon] = useState(true)
  return (
    <>
    <Input
    type='text'
      value = {value}
      placeholder='Search news'
        onChange={e => onChange(e.target.value)}>
      </Input>
      <SearchButton type="button" onClick={() => {
        setChangeIcon(!changeIcon);
      }}>
              {changeIcon ? <OpenSearch /> : <CloseSearch/>}
            </SearchButton>
 </>
  )     

}
  
