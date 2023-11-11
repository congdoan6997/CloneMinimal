import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { alpha, useTheme } from '@mui/material/styles';
import { bgGradient } from 'src/theme/css';
import TextField from '@mui/material/TextField';
import { InputAdornment, outlinedInputClasses } from '@mui/material';
import Iconify from 'src/components/iconify';

export default function FaqsHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: 'public/assets/images/faqs/hero.jpg',
        }),
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container>
        <Box
          sx={{
            position: { md: 'absolute' },
            bottom: { md: 80 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="h1" sx={{ color: 'primary.main' }}>
            How
          </Typography>
          <Typography variant="h1" sx={{ color: 'common.white' }}>
            can we help you?
          </Typography>

          <TextField
            fullWidth
            placeholder="Search support..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              mt: 5,
              maxWidth: 360,
              [`& .${outlinedInputClasses.root}`]: {
                bgcolor: 'common.white',
              },
              [`& .${outlinedInputClasses.input}`]: {
                typography: 'subtitle1',
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
