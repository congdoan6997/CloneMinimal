import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import { Button, IconButton, InputAdornment } from '@mui/material';

import { ComingSoonIllustration } from 'src/assets/illustrations';
import TimeBlock from './time-block';
import { useCountdownDate } from 'src/hooks';
import { _socials } from 'src/_mock';
import Iconify from 'src/components/iconify';
import { alpha, bgcolor } from '@mui/system';

export default function ComingSoonView() {
  const { days, hours, minutes, seconds } = useCountdownDate(new Date('11/05/2023 21:30'));
  return (
    <>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Coming Soon!
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>
        We are current working hard on this page!
      </Typography>

      <ComingSoonIllustration sx={{ my: 10, height: 240 }} />

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Box sx={{ mx: { sx: 1, md: 2.5 } }}>:</Box>}
        sx={{ typography: 'h2' }}
      >
        <TimeBlock label="Days" value={days}></TimeBlock>
        <TimeBlock label="Hours" value={hours}></TimeBlock>
        <TimeBlock label="Minutes" value={minutes}></TimeBlock>
        <TimeBlock label="Seconds" value={seconds}></TimeBlock>
      </Stack>

      <TextField
        fullWidth
        placeholder="Enter your email"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" size="large">
                Notify Me
              </Button>
            </InputAdornment>
          ),
          sx: {
            pr: 0.5,
          },
        }}
        sx={{ my: 5 }}
      ></TextField>

      <Stack spacing={1} alignItems="center" justifyContent="center" direction="row">
        {_socials.map((social) => (
          <IconButton
            key={social.name}
            sx={{ color: social.color, '&:hover': { bgcolor: alpha(social.color, 0.08) } }}
          >
            <Iconify icon={social.icon} />
          </IconButton>
        ))}
      </Stack>
    </>
  );
}
