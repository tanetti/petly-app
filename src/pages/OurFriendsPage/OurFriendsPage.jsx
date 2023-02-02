import sponsors from './sponsors.json';
import { OurFriendsList } from '../../components/OurFriendsList/OurFriendsList';
import { Title } from 'components/Title/Title';
import { useGetServicesQuery } from 'redux/services/servicesApi';
import { Container } from 'components/Shared';

export const OurFriendsPage = () => {
  const { data, error, isLoading } = useGetServicesQuery();

  console.log(data ?? isLoading ?? error);

  return (
    <section>
      <Container>
        <Title text={'Our friends'} />
        <OurFriendsList sponsors={sponsors} />
      </Container>
    </section>
  );
};
