import { Container, PageTitle} from 'components/Shared';
import { NoticesSearch } from 'components/NoticesSearch';
import { NoticesCategoriesNav } from "components/NoticesCategoriesNav";
// import { NoticesCategoriesList } from 'components/NoticesCategoriesList';
// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { fetchSearchNotices } from 'services/api';


export const NoticesPage = () => {
  // const [notices, setNotices] = useState([]);
  // const [query, setQuery] = useState('');
  // const [status, setStatus] = useState('idle');
  // const [searchParams, setSearchParams] = useSearchParams();
  // const noticeName = searchParams.get('query') ?? '';
  // const newQuery = query => {
  //   const newParams = query !== '' ? { query } : {};
  //   setSearchParams(newParams);
  // };

  // useEffect(() => {
  //   if (noticeName === '') {
  //     return;
  //   }
  //   async function getNotices() {
  //     try {
  //       setStatus('pending');
  //       const response = await fetchSearchNotices(noticeName);
  //       setNotices(response);
  //       setStatus('resolved');
  //     } catch (error) {
  //       setStatus('rejected');
  //       console.log(error);
  //     }
  //   }
  //   getNotices();
  // }, [noticeName]);

  // useEffect(() => {
  //   if (query === '') {
  //     return;
  //   }
  //   async function getNotices() {
  //     try {
  //       setStatus('pending');
  //       const response = await fetchSearchNotices(query);
  //       setNotices(response);
  //       setStatus('resolved');
  //     } catch (error) {
  //       setStatus('rejected');
  //     }
  //   }
  //   getNotices();
  // }, [query]);
  // const handleSearchQuery = input => {
  //   setQuery(input.trim());
  //   newQuery(input.trim());
  // };
  return (
    <section>
    <Container>
      <PageTitle>Find your favorite pet</PageTitle>
      <NoticesSearch
      // getSearchQuery={handleSearchQuery} 
      />
      <NoticesCategoriesNav/>
      {/* {notices.length > 0 && */}
         {/* <NoticesCategoriesList  */}
        {/* notices={notices} */}
          {/* />  */}
      {/* } */}
      {/* {status === 'pending' && <h3>loading...</h3>}
      {status==='rejected' && <h3>Something went wrong...</h3>} */}
      {/* <AddNoticeButton /> */}
    </Container>
  </section>)
};
