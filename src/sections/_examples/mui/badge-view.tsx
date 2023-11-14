import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import ComponentBlock from '../component-block';
import Badge from '@mui/material/Badge';
import Iconify from 'src/components/iconify';
import Typography from '@mui/material/Typography';

const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;
const STATUS = ['alway', 'online', 'busy', 'offline'] as const;
export default function BadgeView() {
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
            heading="Badge"
            links={[
              {
                name: 'Components',
                href: paths.components,
              },
              { name: 'Badge' },
            ]}
            moreLink={['https://mui.com/components/badges']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
          <ComponentBlock title="Basic">
            {COLORS.map((color) => (
              <Badge key={color} color={color} badgeContent={4}>
                <Iconify icon="fluent:mail-24-filled" width={24} />
              </Badge>
            ))}
          </ComponentBlock>

          <ComponentBlock title="Maximum Value">
            <Badge color="error" badgeContent={99}>
              <Iconify icon="fluent:mail-24-filled" width={24} />
            </Badge>

            <Badge color="error" badgeContent={100} max={99}>
              <Iconify icon="fluent:mail-24-filled" width={24} />
            </Badge>
            <Badge color="error" badgeContent={1000} max={999}>
              <Iconify icon="fluent:mail-24-filled" width={24} />
            </Badge>
          </ComponentBlock>

          <ComponentBlock title="Dot badge">
            <Badge variant="dot" color="info">
              <Iconify icon="fluent:mail-24-filled" width={24} />
            </Badge>

            <Badge variant="dot" color="info">
              <Typography>Typography</Typography>
            </Badge>
          </ComponentBlock>

          <ComponentBlock title="Badge overlap">
            <Badge color="info" badgeContent=" ">
              <Box sx={{ width: 40, height: 40, bgcolor: 'warning.main' }}></Box>
            </Badge>
            <Badge color="info" badgeContent=" " variant="dot">
              <Box sx={{ width: 40, height: 40, bgcolor: 'warning.main' }}></Box>
            </Badge>
            <Badge color="info" overlap="circular" badgeContent=" ">
              <Box sx={{ width: 40, height: 40, bgcolor: 'warning.main', borderRadius: '50%' }} />
            </Badge>
            <Badge color="info" overlap="circular" variant="dot" badgeContent=" ">
              <Box sx={{ width: 40, height: 40, bgcolor: 'warning.main', borderRadius: '50%' }} />
            </Badge>
          </ComponentBlock>
          <ComponentBlock title="Status">
            {STATUS.map((status) => (
              <Badge
                key={status}
                variant={status}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              >
                <Box sx={{ width: 40, height: 40, bgcolor: 'grey.400', borderRadius: '50%' }}></Box>
              </Badge>
            ))}
          </ComponentBlock>
        </Masonry>
      </Container>
    </>
  );
}
