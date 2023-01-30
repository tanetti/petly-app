import React from 'react';
import { ListNews, ItemNews,Description,ColorBlock, TitleArticle, AddBlock, Date, Link } from './NewsListStyled';

export function NewsList({ data } ) {
 
  const markupNews = data.map(({ id, url, title, description, date }) => {
    return <ItemNews key={id}>
      <ColorBlock></ColorBlock>
      <TitleArticle>{title}</TitleArticle>
      <Description> {description}</Description>
      <AddBlock>
        <Date> {date}</Date>
        <Link href={url} target='blank'> Read more </Link>
      </AddBlock>
      
    
      
    </ItemNews>
  }
  )
   
  return (
    <ListNews>
      {markupNews}
    </ListNews>
  )
}