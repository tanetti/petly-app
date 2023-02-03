import { NewsList } from 'components/NewsList/NewsList';
import { Container, PageTitle, SearchBox } from 'components/Shared';

export const NewsPage = () => {
  return (
    <section>
      <Container>
        <PageTitle>News</PageTitle>
        <SearchBox />
        <NewsList />
      </Container>
    </section>
  );
};
