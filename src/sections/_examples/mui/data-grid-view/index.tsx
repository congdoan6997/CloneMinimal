import { Card, CardHeader, Link, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import DataGridBasic from './data-grid-basic';
import DataGridCustom from './data-grid-custom';

const _dataGrid = [...Array(20)].map((_, index) => ({
  id: index + 1,
  firstName: `First Name ${index + 1}`,
  lastName: `Last Name ${index + 1}`,
  age: index + 1,
  fullName: `First Name ${index + 1} Last Name ${index + 1}`,
}));

const _dataGrid2 = [...Array(20)].map((_, index) => {
  const status =
    (index % 2 && 'online') || (index % 3 && 'alway') || (index % 4 && 'busy') || 'offline';
  return {
    id: `${index + 1}`,
    status,
    email: `mailabc${index + 1}@gmail.com`,
    name: `Name ${index + 1}`,
    lastLogin: new Date(),
    isAdmin: index % 2 === 0 ? true : false,
    lastName: `Last Name ${index + 1}`,
    rating: (index + 1) % 5,
    firstName: `First Name ${index + 1}`,
    performance: index * 3.1,
    age: index + 1,
  };
});

export default function DataGridView() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          py: 5,
          bgcolor: theme.palette.mode === 'light' ? 'grey.200' : 'grey.800',
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Data Grid"
            links={[
              {
                name: 'Components',
                href: paths.components,
              },
              { name: 'Data Grid' },
            ]}
            moreLink={['https://mui.com/x/react-data-grid/']}
          />

          <Typography variant="body2" sx={{ py: 3 }}>
            This component includes 2 <strong>Free</strong> and <strong>Paid</strong> versions from
            MUI. <br />
            Paid version will have more features. Please read more{' '}
            <Link
              href="https://mui.com/x/react-data-grid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </Link>
          </Typography>
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={5}>
          <Card>
            <CardHeader title="Basic" sx={{ mb: 2 }} />
            <Box sx={{ height: 390 }}>
              <DataGridBasic data={_dataGrid} />
            </Box>
          </Card>

          <Card>
            <CardHeader title="Custom" sx={{ mb: 2 }} />
            <Box sx={{ height: 780 }}>
              <DataGridCustom data={_dataGrid2} />
            </Box>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
