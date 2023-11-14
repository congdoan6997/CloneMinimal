import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import React, { useCallback, useState } from 'react';
import { useBoolean } from 'src/hooks';

export default function MaxWidthDialog() {
  const dialog = useBoolean();

  const [fullWidth, setFullWidth] = useState(true);

  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm');

  const handleFullWidthClick = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFullWidth(event.target.checked);
  }, []);

  const handleMaxWidthClick = useCallback((event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill
      event.target.value
    );
  }, []);
  return (
    <>
      <Button variant="outlined" onClick={dialog.onTrue}>
        Open max width dialog
      </Button>

      <Dialog
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        open={dialog.value}
        onClose={dialog.onFalse}
        disableRestoreFocus
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <Typography sx={{ color: 'text.secondary' }}>
            You can set my maximum width and whether to adapt or not.
          </Typography>

          <Box
            component="form"
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              margin: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl
              sx={{
                minWidth: 160,
                my: 3,
              }}
            >
              <InputLabel>maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthClick}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value={false as any}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>

            <FormControlLabel
              control={<Switch checked={fullWidth} onChange={handleFullWidthClick} />}
              label="Full width"
              sx={{ mt: 1 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialog.onFalse} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
