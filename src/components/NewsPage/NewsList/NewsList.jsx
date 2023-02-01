import React, { useState } from 'react';
import { ListNews, ItemNews, ColorBlock, TitleArticle, AddBlock, Date, Link, Description, DescriptionUp, DescriptionText } from './NewsListStyled';

export const NewsList = ({ data }) => {
  const [isShown, setIsShown] = useState(false);
  const [idNews, setIdNews] = useState("")
  const markupNews = data.map(({ id, url, title, description, date }) => {
    return <ItemNews key={id}>
      <ColorBlock></ColorBlock>
      <TitleArticle>{title}</TitleArticle>
      <Description
        onClick={() => {
          setIsShown(prev => !prev);
        setIdNews(id)}}
        // onMouseEnter={() => {
        // setIsShown(true);
        // console.log(id)
        // setIdNews(id)}}
        // onMouseLeave={() => {
        //   setIsShown(false);
        //   setIdNews()
        // }}
      > <DescriptionText>{description}</DescriptionText></Description>
      {(isShown & idNews === id) ? (<DescriptionUp onClick={() => {
        setIsShown(prev => !prev)
      }}>{description}</DescriptionUp>):<div></div>}
    
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