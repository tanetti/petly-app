import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
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
