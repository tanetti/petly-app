import { OwnPets, UserData } from './components';
import { SectionTitle, UserContainer } from './components/shared';
import { UserPageContainer } from './UserDataAndOwnPetsStyled';

export const UserDataAndOwnPets = () => (
  <UserPageContainer>
    <section>
      <UserContainer>
        <SectionTitle>My information:</SectionTitle>
        <UserData />
      </UserContainer>
    </section>
    <section>
      <UserContainer>
        <SectionTitle>My pets:</SectionTitle>
        <OwnPets />
      </UserContainer>
    </section>
  </UserPageContainer>
);
