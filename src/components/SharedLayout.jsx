import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';
import { globalStyles } from 'theme/globalStyles';
import { Header } from './Header/Header';
import { Container } from './Shared/ContainerStyled';

export const SharedLayout = () => {
  return (
    <>
      <GlobalStyles styles={globalStyles} />
      <Header />
      <main>
        <section>
          <Container>
            <Suspense
              fallback={
                <div>Please wait while the minions do their work...</div>
              }
            >
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
    </>
  );
};
