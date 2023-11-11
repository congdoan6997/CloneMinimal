import { Button, Typography } from "@mui/material";
import { RouterLink } from "../../routes/components";
import {  MaintenanceIllustration} from "src/assets/illusstrations";
import MotionContainer from "src/components/animate/motion-container";
import { m } from "framer-motion";

export default function ViewMaintenance(){
  return (
    <MotionContainer>

    <m.div >
      <Typography variant="h3" sx={{ mb:2 }}>
      Website currently under maintenance
      </Typography >
    </m.div>
    <Typography sx={{ color: 'text.secondary' }}>
    We are currently working hard on this page!
    </Typography>

    <MaintenanceIllustration sx={{height:260, my: {xs: 5, sm: 10 } }} />

    <Button component={RouterLink} href="/" size="large" variant="contained" >
      Go to Home
    </Button>
    </MotionContainer>
  )
}