import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router';
import MainLayout from 'src/layouts/main/layout';

//foundation
const ColorsPage = lazy(() => import('src/pages/components/foundation/colors'));
const TypographyPage = lazy(() => import('src/pages/components/foundation/typography'));
const ShadowsPage = lazy(() => import('src/pages/components/foundation/shadows'));
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
              {
                path: 'typography',
                element: <TypographyPage />,
              },
              {
                path: 'shadows',
                element: <ShadowsPage></ShadowsPage>,
              },
            ],
          },
        ],
      },
    ],
  },
];
