import { Button, Typography } from "@mui/material";
import { RouterLink } from "../../routes/components";
import { ForbiddenIllustration } from "src/assets/illusstrations";
import MotionContainer from "src/components/animate/motion-container";
import { m } from "framer-motion";

export default function View403(){
  return (
    <MotionContainer>

    <m.div >
      <Typography variant="h3" sx={{ mb:2 }}>
        No permission
      </Typography >
    </m.div>
    <Typography sx={{ color: 'text.secondary' }}>
        The page you&apos;re trying access has restricted access.
          <br />
        Please refer to your system administrator
    </Typography>

    <ForbiddenIllustration sx={{height:260, my: {xs: 5, sm: 10 } }} />

    <Button component={RouterLink} href="/" size="large" variant="contained" >
      Go to Home
    </Button>
    </MotionContainer>
  )
}