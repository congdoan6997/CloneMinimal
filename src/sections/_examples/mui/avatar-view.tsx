import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useTheme } from '@mui/material/styles';
import { paths } from 'src/routes/paths';
import Masonry from '@mui/lab/Masonry';
import Avatar from '@mui/material/Avatar';
import ComponentBlock from '../component-block';
import Tooltip from '@mui/material/Tooltip';
import Iconify from 'src/components/iconify';
import Stack from '@mui/material/Stack';
import AvatarGroup, { avatarGroupClasses } from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';

const Colors = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;
const Variants = ['circular', 'rounded', 'square'] as const;
const Sizes = [24, 32, 40, 56] as const;
const Status = ['online', 'alway', 'busy', 'offline'] as const;
const Size2 = [24, 32, 48, 56, 64, 80, 128] as const;
export default function AvatarView() {
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
            heading="Avatar"
            links={[
              {
                name: 'Components',
                href: paths.components,
              },
              { name: 'Avatar' },
            ]}
            moreLink={['https://mui.com/components/avatars']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
          <ComponentBlock title="Image" spacing={3}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Avatar key={item} alt="Avatar" src="/assets/images/avatar/avatar_2.jpg" />
            ))}
          </ComponentBlock>

          <ComponentBlock title="Letter" spacing={3}>
            {Colors.map((color) => (
              <Tooltip title={color} key={color}>
                <Avatar
                  sx={{ bgcolor: color === 'default' ? 'grey[500]' : theme.palette[color].main }}
                >
                  H
                </Avatar>
              </Tooltip>
            ))}
          </ComponentBlock>

          <ComponentBlock title="Icon" spacing={3}>
            {Colors.map((color) => (
              <Avatar
                key={color}
                sx={{ bgcolor: color === 'default' ? 'grey[500]' : theme.palette[color].main }}
              >
                <Iconify icon="eva:folder-add-outline" />
              </Avatar>
            ))}
          </ComponentBlock>

          <ComponentBlock title="Variant" spacing={3}>
            {Variants.map((variant) => (
              <Avatar key={variant} variant={variant} sx={{ bgcolor: 'primary.main' }}>
                <Iconify icon="eva:folder-add-outline" />
              </Avatar>
            ))}
          </ComponentBlock>

          <ComponentBlock title="Group">
            <Stack spacing={2} alignItems="center">
              {Sizes.map((size) => (
                <Tooltip title={size} key={size}>
                  <AvatarGroup
                    key={size}
                    sx={{
                      [`& .${avatarGroupClasses.avatar}`]: {
                        width: size,
                        height: size,
                      },
                    }}
                  >
                    {Colors.map((color) => (
                      <Avatar key={color} alt="Avatar" src="/assets/images/avatar/avatar_2.jpg" />
                    ))}
                  </AvatarGroup>
                </Tooltip>
              ))}
              <Tooltip title="Compact">
                <Badge variant="online" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                  <AvatarGroup variant="compact" sx={{ width: 48, height: 48 }}>
                    {Colors.slice(0, 2).map((color) => (
                      <Avatar key={color} src="/assets/images/avatar/avatar_2.jpg" />
                    ))}
                  </AvatarGroup>
                </Badge>
              </Tooltip>
            </Stack>
          </ComponentBlock>

          <ComponentBlock spacing={3}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <Avatar
                  sx={{
                    p: 0,
                    width: 24,
                    height: 24,
                    border: `2px solid ${theme.palette.background.paper}`,
                  }}
                  src="/assets/images/avatar/avatar_2.jpg"
                />
              }
            >
              <Avatar alt="Avatar" src="/assets/images/avatar/avatar_2.jpg" />
            </Badge>
            {Status.map((status) => (
              <Badge
                key={status}
                variant={status}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              >
                <Avatar alt="Avatar" src="/assets/images/avatar/avatar_2.jpg" />
              </Badge>
            ))}
          </ComponentBlock>

          <ComponentBlock spacing={3}>
            {Size2.map((size) => (
              <Avatar
                key={size}
                sx={{ width: size, height: size }}
                alt="Avatar"
                src="/assets/images/avatar/avatar_2.jpg"
              />
            ))}
          </ComponentBlock>
        </Masonry>
      </Container>
    </>
  );
}
