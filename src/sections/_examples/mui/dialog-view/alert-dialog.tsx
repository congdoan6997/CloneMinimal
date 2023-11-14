import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useBoolean } from 'src/hooks';

export default function AlertDialog() {
  const dialog = useBoolean();
  return (
    <>
      <Button color="info" variant="outlined" onClick={dialog.onTrue}>
        Open alert dialog
      </Button>
      <Dialog open={dialog.value} disableRestoreFocus>
        <DialogTitle>Use Google's location service?</DialogTitle>
        <DialogContent sx={{ color: 'text.secondary' }}>
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={dialog.onFalse}>
            Disagree
          </Button>
          <Button autoFocus variant="contained" onClick={dialog.onFalse}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
