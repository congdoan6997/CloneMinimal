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
  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Other',
        items: [
          {title: 'About us', path: '/pages/about-us'},
          {title: 'Contact us', path: '/pages/contact-us'},
        ]
      }
    ]
  }
];
