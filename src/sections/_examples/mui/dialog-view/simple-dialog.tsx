import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useCallback, useState } from 'react';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks';
//-----------------------------------
const emails = ['usename@mail.com', 'usename2@mail.com', 'usename3@mail.com'];
//----------------------
export default function SimpleDialog() {
  const dialog = useBoolean();

  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClose = useCallback(
    (value: string) => {
      setSelectedValue(value);
      dialog.onFalse();
    },
    [dialog]
  );

  return (
    <>
      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <Button variant="outlined" onClick={dialog.onTrue}>
        Open simple dialog
      </Button>
      <Dialog open={dialog.value} onClose={() => handleClose(selectedValue)} disableRestoreFocus>
        <DialogTitle>Set backup account</DialogTitle>
        <List>
          {emails.map((email) => (
            <ListItemButton key={email} onClick={() => handleClose(email)}>
              <Avatar
                sx={{
                  bgcolor: 'info.dark',
                  color: 'info.lighter',
                  mr: 2,
                }}
              >
                <Iconify icon="solar:user-rounded-bold" />
              </Avatar>
              <ListItemText primary={email} />
            </ListItemButton>
          ))}
          <ListItemButton autoFocus onClick={() => handleClose('addAccount')}>
            <Avatar
              sx={{
                mr: 2,
              }}
            >
              <Iconify icon="mingcute:add-line" />
            </Avatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </List>
      </Dialog>
    </>
  );
}
