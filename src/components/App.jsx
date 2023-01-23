import { GlobalStyles } from 'components/GlobalStyles';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Section, Container } from 'components/Shared';

export const App = () => {
  return (
    <main>
      <GlobalStyles />
      <PageTitle title="REACT APP" />
      <Section>
        <Container>
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101',
            }}
          >
            React template
          </div>
        </Container>
      </Section>
    </main>
  );
};
