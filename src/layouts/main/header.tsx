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
import { useOffsetTop, useResponsive } from 'src/hooks';
import NavMobile from './nav/mobile/nav-mobile';
import { HEADER } from '../config-layout';

export default function Header() {
  const offsetTop = useOffsetTop(HEADER.H_DESKTOP);
  const mdUp = useResponsive('up', 'md');
  return (
    <AppBar>
      <Toolbar
        sx={
          {
            // backgroundColor: 'red',
          }
        }
      >
        <Container sx={{ display: 'flex', alignItems: 'center' }}>
          <Badge>
            <Logo />
          </Badge>

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}
          
          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
            <Button variant="contained">Purchase Now</Button>
            
            {mdUp && <Button variant="contained">Login</Button>}
            
            <Button variant="contained">Settings</Button>
            
            {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
