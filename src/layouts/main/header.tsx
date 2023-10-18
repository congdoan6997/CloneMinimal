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

export default function Header() {
  // const offsetTop = useOffSetTop(HEADER.H_DESKTOP);
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

          <NavDesktop offsetTop={false} data={navConfig} />
          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
            <Button>Purchase Now</Button>
            <Button>Login</Button>
            <Button>Settings</Button>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
