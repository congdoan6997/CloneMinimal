import { Helmet } from 'react-helmet-async';
import { useRoutes } from 'react-router-dom';
import MainLayout from 'src/layouts/main/layout';
import HomePage from 'src/pages/home';
import { mainRoutes } from './main';
import { componentsRoutes } from './components';
export default function SimpleLayout() {
  return useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
    //Main routes
    ...mainRoutes,

    //Components routes

    ...componentsRoutes,
  ]);
}
