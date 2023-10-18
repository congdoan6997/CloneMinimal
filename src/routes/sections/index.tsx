import { Helmet } from 'react-helmet-async';
import {useRoutes } from 'react-router-dom';
import MainLayout from 'src/layouts/main/layout';
import HomePage from 'src/pages/home';
import { mainRoutes } from './main';
export default function SimpleLayout() {
  return useRoutes([{
    path:'/',
    element: (
    <MainLayout>
      <HomePage/>
    </MainLayout>)
  },
    ...mainRoutes,
  ])
}
