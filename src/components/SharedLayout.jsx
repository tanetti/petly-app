import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';
import { globalStyles } from 'theme/globalStyles';
import { Container } from './Shared/ContainerStyled';
import { Header } from './Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <GlobalStyles styles={globalStyles} />
      <Header />
      <main>
        <Suspense
          fallback={
            <section>
              <Container>
                Please wait while the minions do their work...
              </Container>
            </section>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
