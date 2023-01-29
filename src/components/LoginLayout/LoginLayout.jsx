import {
  LayoutContainer,
  LayoutHint,
  LayoutHintLink,
  LayoutTitle,
} from 'components/Shared';

export const LoginLayout = () => {
  return (
    <LayoutContainer>
      <LayoutTitle>Login</LayoutTitle>
      <LayoutHint>
        Don't have an account?&nbsp;
        <LayoutHintLink to="/register">Register</LayoutHintLink>
      </LayoutHint>
    </LayoutContainer>
  );
};
