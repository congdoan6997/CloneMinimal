import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router';
import MainLayout from 'src/layouts/main/layout';
import AboutPage from 'src/pages/about-us';
import DocsPage from 'src/pages/docs';
import SettingPage from 'src/pages/setting';

import MaintenancePage from 'src/pages/maintenance';
import CompactLayout from 'src/layouts/compact';
export const HomePage = lazy(() => import('src/pages/home'));
const ComingSoonPage = lazy(() => import('src/pages/coming-soon'));
const ContactPage = lazy(() => import('src/pages/contact-us'));
const FaqsPage = lazy(() => import('src/pages/faqs'));
const Page500 = lazy(() => import('src/pages/Error/page500'));
const Page403 = lazy(() => import('src/pages/Error/page403'));
const Page404 = lazy(() => import('src/pages/Error/page404'));

export const mainRoutes = [
  {
    element: (
      <MainLayout>
        <Suspense fallback={<>Loading</>}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      {
        path: 'about-us',
        element: <AboutPage />,
      },
      {
        path: 'setting',
        element: <SettingPage />,
      },
      {
        path: 'faqs',
        element: <FaqsPage />,
      },
      {
        path: 'contact-us',
        element: <ContactPage />,
      },
      {
        path: 'docs',
        element: <DocsPage />,
      },
    ],
  },
  {
    element: (
      <CompactLayout>
        <Suspense fallback={<>Loading</>}>
          <Outlet />
        </Suspense>
      </CompactLayout>
    ),
    children: [
      {
        path: 'comingSoon',
        element: <ComingSoonPage />,
      },
      {
        path: 'maintenance',
        element: <MaintenancePage />,
      },
      {
        path: '500',
        element: <Page500 />,
      },
      {
        path: '403',
        element: <Page403 />,
      },
      {
        path: '404',
        element: <Page404 />,
      },
    ],
  },
];
