// @mui
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

// components
import Logo from 'src/components/logo';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { usePathname } from 'src/hooks/use-pathname';


// ----------------------------------------------------------------------



export default function Footer() {
  const pathname = usePathname();

  const isHome = pathname === '/';

  const simpleFooter = (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Logo sx={{ mb: 1, mx: 'auto' }} />

        <Typography variant="caption" component="div">
          © All rights reserved
          <br /> made by
          <Link href="https://minimals.cc/"> minimals.cc </Link>
        </Typography>
      </Container>
    </Box>
  );
  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      </Box>);
  return isHome ? simpleFooter : mainFooter;
    }
