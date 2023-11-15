import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import Iconify from 'src/components/iconify';

export default function SwitchList() {
  const [toggle, setToggle] = useState(['wifi']);
  const handleToggle = (value: string) => () => {
    const currentIndex = toggle.indexOf(value);
    const newToggle = [...toggle];
    if (currentIndex === -1) {
      newToggle.push(value);
    } else {
      newToggle.splice(currentIndex, 1);
    }
    setToggle(newToggle);
  };
  return (
    <Paper sx={{ width: 1 }} variant="outlined">
      <List subheader={<ListSubheader>Settings</ListSubheader>}>
        <ListItemButton>
          <ListItemIcon>
            <Iconify icon={'ic:baseline-wifi'} width={24} />
          </ListItemIcon>
          <ListItemText primary="Wi-Fi" />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              checked={toggle.indexOf('wifi') !== -1}
              onChange={handleToggle('wifi')}
            />
          </ListItemSecondaryAction>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Iconify icon={'ic:baseline-bluetooth'} width={24} />
          </ListItemIcon>
          <ListItemText primary="Bluetooth" />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              checked={toggle.indexOf('bluetooth') !== -1}
              onChange={handleToggle('bluetooth')}
            />
          </ListItemSecondaryAction>
        </ListItemButton>
      </List>
    </Paper>
  );
}
