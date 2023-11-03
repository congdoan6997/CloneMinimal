import { Button, Typography } from "@mui/material";
import { RouterLink } from "../../routes/components";
import { ForbiddenIllustration, NotFoundIllustration } from "src/assets/illusstrations";
import MotionContainer from "src/components/animate/motion-container";
import { m } from "framer-motion";

export default function View404(){
  return (
    <MotionContainer>

    <m.div >
      <Typography variant="h3" sx={{ mb:2 }}>
      Sorry, Page Not Found!
      </Typography >
    </m.div>
    <Typography sx={{ color: 'text.secondary' }}>
    Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
          sure to check your spelling.
    </Typography>

    <NotFoundIllustration sx={{height:260, my: {xs: 5, sm: 10 } }} />

    <Button component={RouterLink} href="/" size="large" variant="contained" >
      Go to Home
    </Button>
    </MotionContainer>
  )
}