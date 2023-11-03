// import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
//
// import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function FaqsForm() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4">{`Haven't found the right help?`}</Typography>

      <TextField fullWidth label="Name" />

      <TextField fullWidth label="Email" />

      <TextField fullWidth label="Subject" />

      <TextField fullWidth label="Enter your message here." multiline rows={4} />
      <Button size="large" variant="contained">
        Submit Now
      </Button>
    </Stack>
  );
}
