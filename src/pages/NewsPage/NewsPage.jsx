import { useGetNewsQuery } from 'redux/news/newsApi';
import { Container } from 'components/Shared';

export const NewsPage = () => {
  const { data, error, isLoading } = useGetNewsQuery();

  console.log(data ?? isLoading ?? error);

  return (
    <section>
      <Container>
        <div>News Page</div>
      </Container>
    </section>
  );
};