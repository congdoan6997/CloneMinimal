import { Suspense, lazy } from "react";
import { Outlet } from "react-router";
import MainLayout from "src/layouts/main/layout";
export const HomePage = lazy(() => import('src/pages/home'));
export const mainRoutes = [
  {
    element:(<MainLayout>
      <Suspense fallback={<>Loading</>}>
          <Outlet />
        </Suspense>
    </MainLayout>),
    children:[],
  }
]
