
import { Container } from '@mui/material';

import { HeaderSimple } from '../_common';
import { Stack } from '@mui/system';

type Props = {
  children: React.ReactNode;
};

export default function CompactLayout({ children }: Props) {
  return (
    <>
      <HeaderSimple />
      <Container component="main">
        <Stack
          sx={{
            py: 12,
            m: 'auto',
            maxWidth: 400,
            minHeight: '100vh',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Stack>
      </Container>
    </>
  );
}

