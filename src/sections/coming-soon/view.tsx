import { Box, Button, IconButton, InputAdornment, Stack, TextField, Typography, alpha, outlinedInputClasses } from "@mui/material";
import { RouterLink } from "../../routes/components";
import {  ComingSoonIllustration} from "src/assets/illusstrations";
import MotionContainer from "src/components/animate/motion-container";
import { m } from "framer-motion";
import { _socials } from "src/_mock";
import Iconify from "src/components/iconify";
import { useCountdownDate } from "src/hooks";

export default function ViewComingSoon(){
  const {days, hours, minutes, seconds} = useCountdownDate(new Date("2024-05-26T16:45:30"));
  return (
    <MotionContainer>

    <m.div >
      <Typography variant="h3" sx={{ mb:2 }}>
      Coming Soon!
      </Typography >
    </m.div>
    <Typography sx={{ color: 'text.secondary' }}>
    We are currently working hard on this page!
    </Typography>

    <ComingSoonIllustration sx={{height:260, my: {xs: 5, sm: 10 } }} />

    <Stack
    direction="row"
    justifyContent="center"
    divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
    sx={{ typography: 'h2'}}
    >
      <TimeBlock label="Days" value={days} />
      <TimeBlock label="Hours" value={hours} />
      <TimeBlock label="Minutes" value={minutes} />
      <TimeBlock label="Seconds" value={seconds} />
    </Stack>
    <TextField
    fullWidth
    placeholder="Enter your email"
    InputProps={{
      endAdornment:(
        <InputAdornment position="end">
          <Button variant="contained" size="large">
          Notify Me
          </Button>
        </InputAdornment>
      ),
      sx: {
        pr: 0.5,
        [`&.${outlinedInputClasses.focused}`]: {
          boxShadow: (theme) => theme.customShadows.z20,
          transition: (theme) =>
            theme.transitions.create(['box-shadow'], {
              duration: theme.transitions.duration.shorter,
            }),
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
          },
        },
      },
    }}
    sx={{ my: 5 }}
    />
    <Stack
              direction="row"
              alignItems='center'
              spacing={1}
              justifyContent= 'center'
              
            >
              {_socials.map((social) => (
                <IconButton
                  key={social.name}
                  sx={{
                    '&:hover': {
                      bgcolor: alpha(social.color, 0.08),
                    },
                  }}
                >
                  <Iconify color={social.color} icon={social.icon} />
                </IconButton>
              ))}
            </Stack>
    </MotionContainer>
  )
}
// ----------------------------------------------------------------------------------

type TimeBlokProps ={
  label: string;
  value: string;
}

function TimeBlock({label, value}: TimeBlokProps ){
  return (
    <div>
      <Box> {value}</Box>
      <Box
      sx={{ color: 'text.secondary', typography: 'body1'}}
      > {label}</Box>
    </div>
  )
}