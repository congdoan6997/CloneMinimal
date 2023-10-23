import Stack from '@mui/material/Stack';
import { NavProps } from '../types';

export default function NavDesktop(props: NavProps) {
  const { offsetTop, data } = props;
  return (
    <Stack component="nav" direction={'row'} spacing={5} sx={{ mr: 2.5, height: 1 }}>
      {data.map((link) => (
        <p key={link.title}>{link.title}</p>
      ))}
    </Stack>
  );
}
