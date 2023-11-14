import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { forwardRef } from 'react';
import { TransitionProps } from '@mui/material/transitions';
// hooks
import { useBoolean } from 'src/hooks';
import Slide from '@mui/material/Slide';

// ----------------------------------------------------
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

export default function TransitionDialog() {
  const dialog = useBoolean();
  return (
    <div>
      <Button color="success" variant="outlined" onClick={dialog.onTrue}>
        Open transition dialog
      </Button>
      <Dialog
        keepMounted
        TransitionComponent={Transition}
        open={dialog.value}
        onClose={dialog.onFalse}
        disableRestoreFocus
      >
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
    </div>
  );
}
