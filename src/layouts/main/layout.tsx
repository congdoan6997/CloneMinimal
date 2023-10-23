import Box from '@mui/material/Box';

import Header from './header';
import { usePathname } from 'src/hooks/use-pathname';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const pathname = usePathname();

  const isHome = pathname === '/';
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      {/* TODO: Header */}
      <Header />

      {/* Content start */}
      <Box
        component="main"
        sx={{
          width:"100%",        
          flexGrow: 1,
          ...(!isHome && {
            pt: { xs: 8, md: 10 },
          }),
        }}
      >
        {children}
      </Box>
      {/* Content end */}

      {/* TODO: Footer */}
      <Footer/>
    </Box>
  );
}
