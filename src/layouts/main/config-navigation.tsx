import Iconify from 'src/components/iconify';
import { paths } from 'src/routes/paths';

export const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: 'Components',
    icon: <Iconify icon="solar:home-2-broken" />,
    path: paths.components,
  },
];
