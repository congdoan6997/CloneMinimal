import Box from '@mui/material/Box';

type Props = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
