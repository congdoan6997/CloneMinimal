import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router';
import MainLayout from 'src/layouts/main/layout';
import AboutPage from 'src/pages/about-us';
import FaqsPage from 'src/pages/faqs'
import ContactPage from 'src/pages/contact-us';

export const HomePage = lazy(() => import('src/pages/home'));
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
        path: 'faqs',
        element: <FaqsPage />
        path: 'contact-us',
        element: <ContactPage />,
      }
    ],
  },
];
