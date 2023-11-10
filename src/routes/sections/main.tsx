import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router';
import MainLayout from 'src/layouts/main/layout';
import AboutPage from 'src/pages/about-us';
import DocsPage from 'src/pages/docs';
import SettingPage from 'src/pages/setting';
import FaqsPage from 'src/pages/faqs';
import ContactPage from 'src/pages/contact-us';
//import ComingSoonPage from 'src/pages/coming-soon';
import MaintenancePage from 'src/pages/maintenance';
//import { Page403, Page404, Page500 } from 'src/pages/Error';
import CompactLayout from 'src/layouts/compact';


export const HomePage = lazy(() => import('src/pages/home'));
const ComingSoonPage = lazy(() => import('src/pages/coming-soon'));
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
        path: 'comingsoon',
        element: <ComingSoonPage  />,
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
