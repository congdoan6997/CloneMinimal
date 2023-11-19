import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import ComponentBlock from '../../component-block';
import SimpleTransferList from './simple-transfer-list';
import EnhancedTransferList from './enhanced-transfer-list';

export default function TransferListView() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          py: 5,
          bgcolor: theme.palette.mode === 'light' ? 'grey.200' : 'grey.800',
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Transfer List"
            links={[
              {
                name: 'Components',
                href: paths.components,
              },
              { name: 'Transfer List' },
            ]}
            moreLink={['https://mui.com/material-ui/react-transfer-list/']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={3}>
          <ComponentBlock title="Simple">
            <SimpleTransferList />
          </ComponentBlock>
          <ComponentBlock title="Enhanced">
            <EnhancedTransferList />
          </ComponentBlock>
        </Stack>
      </Container>
    </>
  );
}
