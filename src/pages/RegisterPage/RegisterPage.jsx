import { RegisterLayout } from 'components/RegisterLayout/RegisterLayout';
import { AuthSection, AuthContainer } from 'components/Shared';

export const RegisterPage = () => (
  <AuthSection>
    <AuthContainer>
      <RegisterLayout />
    </AuthContainer>
  </AuthSection>
);
