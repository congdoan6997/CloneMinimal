import { Link, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/system/Stack';

import { HEADER } from '../config-layout';
import Logo from 'src/components/logo';
import SettingsButton from './settings-button';
import { RouterLink } from 'src/routes/components';

export default function HeaderSimple() {
  return (
    <AppBar>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
        }}
      >
        <Logo />

        <Stack spacing={1} alignItems={'center'} direction={'row'}>
          <SettingsButton />

          <Link href={'/faqs'} component={RouterLink} sx={{ typography: 'subtitle2' }}>
            Need help?
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
