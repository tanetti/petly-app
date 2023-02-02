import { OwnPets, UserData } from './components';
import { UserContainer } from './components/shared';
import {
  UserDataSection,
  UserOwnPetsSection,
  UserPageContainer,
  SectionTitle,
} from './UserDataAndOwnPetsStyled';

export const UserDataAndOwnPets = () => (
  <UserPageContainer>
    <UserDataSection>
      <UserContainer>
        <SectionTitle>My information:</SectionTitle>
        <UserData />
      </UserContainer>
    </UserDataSection>
    <UserOwnPetsSection>
      <UserContainer>
        <SectionTitle>My pets:</SectionTitle>
        <OwnPets />
      </UserContainer>
    </UserOwnPetsSection>
  </UserPageContainer>
);
