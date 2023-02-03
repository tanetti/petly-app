import { useGetServicesQuery } from 'redux/services/servicesApi';
import { FriendsList } from './OurFriendsListStyled';
import { OurFriendsItem } from './components';
import sponsors from 'TEMP/sponsors.json';

export const OurFriendsList = () => {
  const { data, error, isLoading } = useGetServicesQuery();

  console.log(data ?? isLoading ?? error);

  return (
    <FriendsList>
      {sponsors.map(friendData => (
        <OurFriendsItem key={friendData.title} friendData={friendData} />
      ))}
    </FriendsList>
  );
};
