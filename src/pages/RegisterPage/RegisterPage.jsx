import { RegisterLayout } from 'components/RegisterLayout/RegisterLayout';
import {
  RegistrationSection,
  RegistrationContainer,
} from './RegisterPageStyled';

export const RegisterPage = () => (
  <RegistrationSection>
    <RegistrationContainer>
      <RegisterLayout />
    </RegistrationContainer>
  </RegistrationSection>
);
