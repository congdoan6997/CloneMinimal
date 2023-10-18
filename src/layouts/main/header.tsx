import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Header() {
  return (
    <AppBar>
      <Toolbar
        sx={{
          backgroundColor: 'red',
        }}
      ></Toolbar>
    </AppBar>
  );
}
