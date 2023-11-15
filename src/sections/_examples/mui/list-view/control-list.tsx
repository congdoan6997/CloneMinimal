import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { useCallback, useState } from 'react';
import Iconify from 'src/components/iconify';

export default function ControlList() {
  const [checked, setChecked] = useState<number[]>([0]);
  const handleCheck = (index: number) => () => {
    const currentIndex = checked.indexOf(index);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <Paper sx={{ width: 1 }} variant="outlined">
      <List>
        {[1, 2, 3, 4].map((index) => (
          <ListItemButton key={index} dense onClick={handleCheck(index)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(index) !== -1}
                disableRipple
                tabIndex={-1}
              />
            </ListItemIcon>
            <ListItemText primary={`Line Item ${index}`} />
            <ListItemSecondaryAction>
              <IconButton>
                <Iconify icon="solar:chat-round-dots-bold" width={24} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}
