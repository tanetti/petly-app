import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';
import { globalStyles } from 'theme/globalStyles';

export const SharedLayout = () => {
  return (
    <>
      <GlobalStyles styles={globalStyles} />
      <div>Shared layout</div>
      <main>
        <Suspense
          fallback={<div>Please wait while the minions do their work...</div>}
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
