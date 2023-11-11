import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router';
import MainLayout from 'src/layouts/main/layout';

//foundation
const ColorsPage = lazy(() => import('src/pages/components/foundation/colors'));
export const componentsRoutes = [
  {
    element: (
      <MainLayout>
        <Suspense fallback={<>Loading components...</>}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      {
        path: 'components',
        children: [
          { element: <></> },
          {
            path: 'foundation',
            children: [
              {
                path: 'colors',
                element: <ColorsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
];
