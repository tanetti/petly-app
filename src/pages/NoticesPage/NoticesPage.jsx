import { NoticesButtonBar } from 'components/NoticesButtonBar/NoticesButtonBar';
import { NoticesList } from 'components/NoticesList/NoticesList';
import { Container, PageTitle, SearchBox } from 'components/Shared';

export const NoticesPage = () => {
  return (
    <section>
      <Container>
        <PageTitle>Find your favorite pet</PageTitle>
        <SearchBox />
        <NoticesButtonBar />
        <NoticesList />
      </Container>
    </section>
  );
};
