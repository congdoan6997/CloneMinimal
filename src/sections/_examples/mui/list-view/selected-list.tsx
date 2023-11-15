import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { useCallback, useState } from 'react';
import Iconify from 'src/components/iconify';

export default function SelectedList() {
  const [selected, setSelected] = useState<number>(-1);
  const handleListItemClick = useCallback(
    (index: number) => {
      setSelected(index);
    },
    [selected]
  );
  return (
    <Paper sx={{ width: 1 }} variant="outlined">
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton selected={selected === 0} onClick={() => handleListItemClick(0)}>
          <ListItemIcon>
            <Iconify icon="solar:inbox-in-bold" width={24} />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton selected={selected === 1} onClick={() => handleListItemClick(1)}>
          <ListItemIcon>
            <Iconify icon="fluent:mail-24-filled" width={24} />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
      <Divider />
      <List component={'nav'} aria-label="secondary mailbox folders">
        <ListItemButton selected={selected === 2} onClick={() => handleListItemClick(2)}>
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton selected={selected === 3} onClick={() => handleListItemClick(3)}>
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List>
    </Paper>
  );
}
