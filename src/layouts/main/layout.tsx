import Box from '@mui/material/Box';

import Header from './header';

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      {/* TODO: Header */}
      <Header />

      {/* Content start */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
      {/* Content end */}

      {/* TODO: Footer */}
    </Box>
  );
}
