import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import Logo from 'src/components/logo';
import Box from '@mui/material/Box';
import NavDesktop from './nav/desktop';
import { navConfig } from './config-navigation';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { HEADER } from '../config-layout';
import { LoginButton, SettingsButton } from '../_common/searchbar';
import { useResponsive } from 'src/hooks/use-responsive';
import NavMobile from './nav/mobile';
import { paths } from 'src/routes/paths';
import { useTheme } from '@mui/material/styles';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { bgBlur } from 'src/theme/css';


export default function Header() {
  const theme = useTheme();
  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);
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
        <Container sx={{ display: 'flex', alignItems: 'center' }}>
          <Badge>
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
