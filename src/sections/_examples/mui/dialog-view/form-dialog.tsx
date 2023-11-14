import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useBoolean } from 'src/hooks';

export default function FormDialog() {
  const dialog = useBoolean();
  return (
    <>
      <Button color="warning" variant="outlined" onClick={dialog.onTrue}>
        Open form dialog
      </Button>
      {/* fix auto focus disable */}
      <Dialog open={dialog.value} onClose={dialog.onFalse} disableRestoreFocus>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <Typography sx={{ mb: 3 }}>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </Typography>
          <TextField
            autoFocus
            fullWidth
            label="Email Address"
            margin="dense"
            variant="outlined"
            type="email"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={dialog.onFalse} color="inherit">
            Cancel
          </Button>
          <Button variant="contained" onClick={dialog.onFalse}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
