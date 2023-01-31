import { LoginLayout } from 'components/LoginLayout/LoginLayout';
import { AuthSection, AuthContainer } from 'components/Shared';

export const LoginPage = () => (
  <AuthSection>
    <AuthContainer>
      <LoginLayout />
    </AuthContainer>
  </AuthSection>
);
