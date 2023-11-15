import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import { useCallback, useState } from 'react';
import Iconify from 'src/components/iconify';

export default function NestedList() {
  const [open, setOpen] = useState(true);
  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);
  return (
    <Paper sx={{ width: 1 }} variant="outlined">
      <List
        component={'nav'}
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component={'div'} id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <Iconify icon="iconamoon:send-fill" width={24} />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Iconify icon="fluent:mail-24-filled" width={24} />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <Iconify icon="solar:inbox-in-bold" width={24} />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? (
            <Iconify icon="eva:arrow-ios-upward-fill" />
          ) : (
            <Iconify icon="eva:arrow-ios-downward-fill" />
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component={'div'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Iconify icon="ic:round-star-border" width={24} />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Paper>
  );
}
