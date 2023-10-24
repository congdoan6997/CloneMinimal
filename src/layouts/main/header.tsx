import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';
import Logo from 'src/components/logo';
import Box from '@mui/material/Box';
import NavDesktop from './nav/desktop';
import { navConfig } from './config-navigation';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useOffsetTop, useResponsive } from 'src/hooks';
import NavMobile from './nav/mobile/nav-mobile';
import { HEADER } from '../config-layout';
import { useTheme } from '@mui/material/styles';
import { bgBlur } from 'src/theme/css';
import Link from '@mui/material/Link';
// routes
import { paths } from 'src/routes/paths';
import Label from 'src/components/label';
import { LoginButton, SettingsButton } from '../_common';

export default function Header() {
  const theme = useTheme();
  const offsetTop = useOffsetTop(HEADER.H_DESKTOP);
  const mdUp = useResponsive('up', 'md');
  return (
    <AppBar>
      <Toolbar
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Badge
            sx={{
              [`& .${badgeClasses.badge}`]: {
                top: 8,
                right: -16,
              },
            }}
            badgeContent={
              <Link target="_blank" rel="noopener" underline="none" href={paths.changelog}>
                <Label color="info" sx={{ textTransform: 'unset', height: 22, px: 0.5 }}>
                  v5.5.0
                </Label>
              </Link>
            }
          >
            <Logo />
          </Badge>

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
            <Button variant="contained" target="_blank" rel="noopener" href={paths.minimalUI}>
              Purchase Now
            </Button>

            {mdUp && <LoginButton />}

            <SettingsButton
              sx={{
                ml: { xs: 1, md: 0 },
                mr: { md: 2 },
              }}
            />

            {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
