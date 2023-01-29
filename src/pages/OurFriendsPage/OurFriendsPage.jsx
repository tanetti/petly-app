import { Container } from 'components/Shared';
import sponsors from './sponsors.json';
import { OurFriendsList } from '../../components/OurFriendsList/OurFriendsList';
import { Title } from 'components/Title/Title';
export const OurFriendsPage = () => {
  return (
    <section>
      <Container>
        <Title text="Our friends" />

        <OurFriendsList sponsors={sponsors} />
      </Container>
    </section>
  );
};
