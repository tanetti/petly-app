import { List } from './OurFriendsListStyled';
import { OurFriendsItem } from './components';

export const OurFriendsList = ({ sponsors }) => {
  return (
    <List>
      {sponsors.map(
        ({
          title,
          url,
          addressUrl,
          imageUrl,
          address,
          phone,
          email,
          workDays,
        }) => (
          <OurFriendsItem
            key={title}
            title={title}
            url={url}
            addressUrl={addressUrl}
            imageUrl={imageUrl}
            address={address}
            phone={phone}
            email={email}
            workDays={workDays}
          />
        )
      )}
    </List>
  );
};
