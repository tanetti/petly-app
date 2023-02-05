// import { useGetAllNoticesQuery } from 'redux/notices/noticesApi';
import notices from './notices'; /*===Это нужно закомментировать, остальное- наоборот, высветить===*/
import { Container, PageTitle, SearchBox } from 'components/Shared';
// import { useParams } from 'react-router-dom';
import { NoticesCategoriesNav } from 'components/Notices/components/NoticesCategoriesNav';
import { NoticesCategoriesList } from 'components/Notices/components/NoticesCategoriesList';
// import { useSearchParams } from 'react-router-dom';
// import { ErrorLayout, LoaderLayout, NoResultLayout } from 'components/Shared';
import { BtnBox, BtnSign, AddNoticeButton, WrapperIcon, AddNoticeIcon } from '../../components/Notices/Notices.styled';
import { CommonModal } from 'components/Shared';
import { useState } from 'react';
// import { useAuth } from 'hooks';
export const NoticesPage = () => {
  // const [searchParams] = useSearchParams();
  // const { categoryName } = useParams();
  // const newCategoryName = categoryName ? categoryName : "sell";
  // const searchValue = searchParams.get('search');
  // const { data: notices, error, isLoading, isPending } = useGetAllNoticesQuery({ newCategoryName, searchValue });
  const [isModalOpened, setIsModalOpened] = useState(false);
  // const { isUserLoggedIn } = useAuth();
  return (
    <section>
      <Container>        
        <PageTitle>Find your favorite pet</PageTitle>
        <SearchBox/>
        <BtnBox>
          <div><NoticesCategoriesNav /></div>
        <AddNoticeButton title="Add pet" type="button" onClick={() => setIsModalOpened(true)}>
            <BtnSign>Add pet</BtnSign>
            <WrapperIcon>
              <AddNoticeIcon />
            </WrapperIcon>
      </AddNoticeButton>
        </BtnBox>
        
        {/* <AddNoticeButton /> */}
        {/* {isLoading ? <LoaderLayout requestEntityName="news" /> : null}
        {!isLoading && !isPending && error ? <ErrorLayout /> : null} */}
        {/* {!isLoading && !isPending && !error && notices.length===0 ? (
        <NoResultLayout />
        ) : null} */}
        {/*!isLoading && !error && */notices.length > 0 ? <NoticesCategoriesList notices={notices} />: null}
      
      <CommonModal
        title="Common modal"
        isOpened={isModalOpened}
        isActionsDisabled={false}
        closeModal={() => setIsModalOpened(false)}
      >
        <p>MODAL FOR ADD PET</p>
        
        <p>MODAL</p>
        <p>MODAL</p>
        <p>MODAL</p>
        <p>MODAL</p>
        <p>MODAL</p>
        <p>MODAL</p>
        <p>MODAL</p>
        <p>MODAL</p>
        <p>MODAL</p>
        </CommonModal>
      </Container>
    </section>
  );
};