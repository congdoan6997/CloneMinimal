import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useCallback, useState } from 'react';
import { useBoolean } from 'src/hooks';

export default function ScrollDialog() {
  const dialog = useBoolean();
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const handleScrollClick = useCallback(
    (scrollType: DialogProps['scroll']) => () => {
      setScroll(scrollType);
      dialog.onTrue();
    },
    [dialog]
  );

  return (
    <>
      <Button variant="outlined" onClick={handleScrollClick('paper')}>
        scroll=paper
      </Button>
      <Button variant="outlined" onClick={handleScrollClick('body')}>
        scroll=body
      </Button>

      <Dialog open={dialog.value} onClose={dialog.onFalse} scroll={scroll}>
        <DialogTitle sx={{ pb: 2 }}>Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText>
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, 
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialog.onFalse}>Cancel</Button>
          <Button onClick={dialog.onFalse} variant="contained">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
