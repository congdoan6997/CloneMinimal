import { Button, Typography } from '@mui/material';
import { RouterLink } from '../../routes/components';
import { SeverErrorIllustration } from 'src/assets/illusstrations';
import MotionContainer from 'src/components/animate/motion-container';
import { m } from 'framer-motion';

export default function View500() {
  return (
    <MotionContainer>
      <m.div>
        <Typography variant="h3" sx={{ mb: 2 }}>
          500 Internal Server Error
        </Typography>
      </m.div>
      <Typography sx={{ color: 'text.secondary' }}>
        There was an error, please try again later.
      </Typography>

      <SeverErrorIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />

      <Button component={RouterLink} href="/" size="large" variant="contained">
        Go to Home
      </Button>
    </MotionContainer>
  );
}
