import Iconify from 'src/components/iconify';
import { paths } from 'src/routes/paths';

export const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="lucide:home" />,
    path: '/',
  },
  {
    title: 'Components',
    icon: <Iconify icon="icon-park-outline:components" />,
    path: paths.components,
  },
  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify icon="iconoir:google-docs" />,
  
  },
  {
    title: 'Docs',
    icon: <Iconify icon="simple-line-icons:docs" />,
    path: paths.docs,
  },
];
