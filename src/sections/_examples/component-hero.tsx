import { Box, Container, Stack, Typography} from "@mui/material"
import {styled, alpha} from "@mui/material/styles"
import { useResponsive } from "src/hooks"
import { bgGradient } from 'src/theme/css';


const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(10, 0),
}));

const StyledBg = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  position: 'absolute',
  transform: 'scaleX(-1)',
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/assets/background/overlay_4.jpg',
  }),
}));


export default function ComponentHero() {
  const mdUp = useResponsive('up', 'md');
  return (
    <StyledRoot>
    <Container
      sx={{
        display:'flex',
        justifyContent: 'space-between'
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h3" component="h1">
          Components
        </Typography >
        
        <Typography sx={{color: 'text.secondary'}}>
              With huge resource pack making deployment
              <br /> easy and expanding more effectively
        </Typography>

      </Stack>

      {mdUp && (
      <Box
      component="img"
      alt="illustrations characters"
      src="/assets/illustrations/characters/character_7.png"
      sx={{ }}
      />
      )} 
    </Container>
      <StyledBg />
    </StyledRoot>
  )
}