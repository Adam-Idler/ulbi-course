import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig, type AppRouteProps } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">
          {route.element}
        </div>
      </Suspense>
    );

    return (
      <Route
          key={route.path}
          path={route.path}
          element={route.authOnly === true ? <RequireAuth>{element}</RequireAuth> : element}
        />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
});
