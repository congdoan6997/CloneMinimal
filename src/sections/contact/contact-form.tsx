import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactForm() {
  return (
    <Stack spacing={5}>
      <Typography variant="h3">
        Feel free to contact us. <br />
        We'll be grad to hear from you, buddy.
      </Typography>

      <Stack spacing={3}>
        <TextField fullWidth label="Name" />
        <TextField fullWidth label="Email" />
        <TextField fullWidth label="Subject" />
        <TextField fullWidth label="Enter your message here" multiline rows={4} />

        <Button size="large" variant="contained">
          Submit Now
        </Button>
      </Stack>
    </Stack>
  );
}
