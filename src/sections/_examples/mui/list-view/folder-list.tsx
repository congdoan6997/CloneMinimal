import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Iconify from 'src/components/iconify';

export default function FolderList() {
  return (
    <Paper sx={{ width: 1 }} variant="outlined">
      <List>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <Iconify icon={'ic:baseline-image'} width={24} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItemButton>

        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <Iconify icon={'ic:baseline-work'} width={24} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItemButton>

        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <Iconify icon={'ic:round-beach-access'} width={24} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItemButton>
      </List>
    </Paper>
  );
}
