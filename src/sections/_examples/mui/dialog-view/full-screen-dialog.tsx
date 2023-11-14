import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks';

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

export default function FullScreenDialog() {
  const dialog = useBoolean();
  return (
    <>
      <Button color="error" variant="outlined" onClick={dialog.onTrue}>
        Open full screen dialog
      </Button>
      <Dialog
        fullScreen
        open={dialog.value}
        onClose={dialog.onFalse}
        TransitionComponent={Transition}
        disableRestoreFocus
      >
        <AppBar color="default" position="relative">
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={dialog.onFalse}>
              <Iconify icon="mingcute:close-line" />
            </IconButton>

            <Typography sx={{ flex: 1, ml: 2 }}>Sound</Typography>

            <Button color="inherit" onClick={dialog.onFalse} variant="contained" autoFocus>
              Save
            </Button>
          </Toolbar>
        </AppBar>

        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>

          <Divider />

          <ListItemButton>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItemButton>
        </List>
      </Dialog>
    </>
  );
}
