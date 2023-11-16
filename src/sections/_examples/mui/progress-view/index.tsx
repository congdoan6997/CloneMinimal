import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import ComponentBlock from '../../component-block';
import UseCircularProgress from './use-circular-progress';
import UseLinearProgress from './use-linear-progress';

export default function ProgressView() {
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
            heading="Radio Button"
            links={[
              {
                name: 'Components',
                href: paths.components,
              },
              { name: 'Radio Button' },
            ]}
            moreLink={['https://mui.com/components/radio-buttons']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={5}>
          <ComponentBlock title="Circular">
            <UseCircularProgress progress={50} />
          </ComponentBlock>

          <ComponentBlock title="Linear">
            <UseLinearProgress progress={50} buffer={75} />
          </ComponentBlock>
        </Stack>
      </Container>
    </>
  );
}
