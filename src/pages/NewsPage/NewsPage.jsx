import { Searchbox }  from "components/NewsPage/Searchbox/Searchbox";
import { NewsList } from "components/NewsPage/NewsList/NewsList";
import { NoSearchResult } from "components/NewsPage/NoSearchResult";
import React, { useState, useEffect } from 'react';          
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Title, OpenSearch, FormSearch, CloseSearch , SearchButton } from "pages/NewsPage/NewsPageStyled";

export const NewsPage = () => {
  const [search, setSearch] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [query, setQuery] = useState(() => {
  const resultQuery = searchParams.get('search') ?? "";
    return resultQuery ? resultQuery : ""
  })

  const Search = async () => {
    const result = await axios.get("http://localhost:5000/api/news")
    if (result.length === 0) {
        return Promise.reject(new Error(` No any news`))
    }
        return result
  }

  const fetchNews = async () => {
    try {
      const res = await Search();
      const data = res.data;
      setSearch(data)

      if (data.length === 0) {
        setError(`No any news in database`)
      }
      else {
        setError(null)
      }   
    }
    catch (error) {    
    }
  }

  const filterSearch = value => {
    setSearchParams(value !== "" ? { search: value } : {})
  }

  const searchQueryFull = searchParams.get('search') ?? "";
  const searchQuery = searchQueryFull.toLowerCase();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({})
    setQuery(searchQuery)
  }

  const sortedSearch = search.sort((a, b) => a.date < b.date ? 1 : -1);
  
  let filteredSearch = [];
  sortedSearch.forEach(article => {
        const titleToLowerCase = article.title.toLowerCase();
        const descriptionToLowerCase = article.description.toLowerCase();
        if (titleToLowerCase.includes(query) || descriptionToLowerCase.includes(query)) {
          filteredSearch.push(article)
        }
   })

  useEffect(() => {
    if (query === "") {
    fetchNews()
    }
     // eslint-disable-next-line 
  }, [query])
console.log(searchParams)
  
    return (
      <>
        <Title>News</Title>
        <FormSearch onSubmit={handleSubmit} onClick={handleSubmit}>
          {searchQueryFull ? <CloseSearch/> :<SearchButton onClick={handleSubmit}> <OpenSearch/></SearchButton> }
          <Searchbox
            value={searchQueryFull}
            onChange={filterSearch}
          />
       </FormSearch>
          
       {(error === null) ? ((query === "") ? <NewsList data={sortedSearch} /> : ((filteredSearch.length !== 0)?<NewsList data={filteredSearch} />:<NoSearchResult/>)) : <div></div>}
    </>  
    )
};
