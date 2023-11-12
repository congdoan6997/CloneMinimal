import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import ComponentBlock from '../component-block';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';
import Button from '@mui/material/Button';

export default function BreadcrumbsView() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ py: 5, bgcolor: theme.palette.mode === 'light' ? 'grey.200' : 'grey.800' }}>
        <Container>
          <CustomBreadcrumbs
            heading="Breadcrumbs"
            links={[{ name: 'Components', href: paths.components }, { name: 'Breadcrumb' }]}
            moreLink={['https://mui.com/material-ui/react-breadcrumbs']}
          ></CustomBreadcrumbs>
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={3}>
          <ComponentBlock title="Text">
            <Breadcrumbs>
              <Link underline="none" href="#" color="inherit">
                Material-UI
              </Link>
              <Link underline="none" href="#" color="inherit">
                Core
              </Link>
              <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
            </Breadcrumbs>
          </ComponentBlock>

          <ComponentBlock title="With Icon">
            <Breadcrumbs>
              <Link
                underline="none"
                href="#"
                color="inherit"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <Iconify icon="eva:home-fill" sx={{ mr: 0.5 }}></Iconify>
                Material-UI
              </Link>
              <Link
                underline="none"
                href="#"
                color="inherit"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <Iconify icon="eva:camera-fill" sx={{ mr: 0.5 }}></Iconify>
                Core
              </Link>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'text.primary',
                }}
              >
                <Iconify icon="solar:bell-bing-bold-duotone" sx={{ mr: 0.5 }}></Iconify>
                Breadcrumbs
              </Typography>
            </Breadcrumbs>
          </ComponentBlock>

          <ComponentBlock title="Custom">
            <CustomBreadcrumbs
              sx={{ width: 1 }}
              links={[
                {
                  name: 'Home',
                  href: '#',
                  icon: <Iconify icon="eva:home-fill" />,
                },
                {
                  name: 'Link 1',
                  href: '#',
                  icon: <Iconify icon="eva:cube-outline" />,
                },
                {
                  name: 'Link 3',
                  href: '#',
                  icon: <Iconify icon="eva:cube-outline" />,
                },
                {
                  name: 'Link 3',
                  href: '#',
                  icon: <Iconify icon="eva:cube-outline" />,
                },
                {
                  name: 'Link 4',
                  icon: <Iconify icon="eva:cube-outline" />,
                },
              ]}
            />

            <CustomBreadcrumbs
              sx={{ width: 1, mt: 5 }}
              heading="Heading"
              links={[
                {
                  name: 'Home',
                  href: '#',
                  icon: <Iconify icon="eva:home-fill" />,
                },
                {
                  name: 'Link 1',
                  href: '#',
                  icon: <Iconify icon="eva:cube-outline" />,
                },
                {
                  name: 'Link 3',
                  href: '#',
                  icon: <Iconify icon="eva:cube-outline" />,
                },
                {
                  name: 'Link 3',
                  href: '#',
                  icon: <Iconify icon="eva:cube-outline" />,
                },
                {
                  name: 'Link 4',
                  icon: <Iconify icon="eva:cube-outline" />,
                },
              ]}
              action={
                <Button variant="contained" startIcon={<Iconify icon="mingcute:add-line" />}>
                  New Product
                </Button>
              }
            />
          </ComponentBlock>
        </Stack>
      </Container>
    </>
  );
}
