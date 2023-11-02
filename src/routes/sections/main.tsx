import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router';
import MainLayout from 'src/layouts/main/layout';
import AboutPage from 'src/pages/about-us';
import DocsPage from 'src/pages/docs';
import SettingPage from 'src/pages/setting';
import FaqsPage from 'src/pages/faqs';
import CompactLayout from 'src/layouts/compact';

export const HomePage = lazy(() => import('src/pages/home'));
const ComingSoonPage = lazy(() => import('src/pages/coming-soon'));
const ContactPage = lazy(() => import('src/pages/contact-us'));

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
        <Suspense>
          <Outlet />
        </Suspense>
      </CompactLayout>
    ),
    children: [
      {
        path: 'coming-soon',
        element: <ComingSoonPage />,
      },
    ],
  },
];
