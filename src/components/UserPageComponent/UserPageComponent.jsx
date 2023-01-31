import { PetsData } from './PetsData/PetsData';
import { UserData } from './UserData/UserData';
import { Wrapper } from './UserPageComponentStyled';

export const UserPageComponent = () => (
  <Wrapper>
    <UserData />

    <PetsData />
  </Wrapper>
);
