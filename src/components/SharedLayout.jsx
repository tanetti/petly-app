import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <div>Shared layout</div>
      <main>
        <Outlet />
      </main>
    </>
  );
};
