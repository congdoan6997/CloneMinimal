import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Iconify from 'src/components/iconify';

export default function SimpleList() {
  return (
    <Paper sx={{ width: 1 }} variant="outlined">
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton>
          <ListItemIcon>
            <Iconify icon="solar:inbox-in-bold" width={24} />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Iconify icon="fluent:mail-24-filled" width={24} />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
      <Divider />
      <List component={'nav'} aria-label="secondary mailbox folders">
        <ListItemButton>
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemLink href="#">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </Paper>
  );
}

function ListItemLink(props: ListItemButtonProps<'a', { button?: true }>) {
  return <ListItemButton component="a" {...props} />;
}
