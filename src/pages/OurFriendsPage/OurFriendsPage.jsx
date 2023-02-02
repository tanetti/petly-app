import { OurFriendsList } from 'components/OurFriendsList/OurFriendsList';
import { Container, PageTitle } from 'components/Shared';

export const OurFriendsPage = () => {
  return (
    <section>
      <Container>
        <PageTitle>Our friends</PageTitle>
        <OurFriendsList />
      </Container>
    </section>
  );
};
