import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import SimpleDialog from './simple-dialog';
import ComponentBlock from '../../component-block';
import AlertDialog from './alert-dialog';
import TransitionDialog from './transition-dialog';
import FormDialog from './form-dialog';
import FullScreenDialog from './full-screen-dialog';
import MaxWidthDialog from './max-width-dialog';
import ScrollDialog from './scroll-dialog';

export default function DialogView() {
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
            heading="Dialog"
            links={[
              {
                name: 'Components',
                href: paths.components,
              },
              { name: 'Dialog' },
            ]}
            moreLink={['https://mui.com/components/dialogs']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Masonry columns={{ xs: 1, md: 3 }} spacing={3}>
          <ComponentBlock title="Simple" direction="column">
            <SimpleDialog />
          </ComponentBlock>

          <ComponentBlock title="Alerts">
            <AlertDialog />
          </ComponentBlock>

          <ComponentBlock title="Transitions">
            <TransitionDialog />
          </ComponentBlock>

          <ComponentBlock title="Forms">
            <FormDialog />
          </ComponentBlock>

          <ComponentBlock title="Full Screen">
            <FullScreenDialog />
          </ComponentBlock>

          <ComponentBlock title="Max Width">
            <MaxWidthDialog />
          </ComponentBlock>

          <ComponentBlock title="Scroll Content Dialogs">
            <ScrollDialog />
          </ComponentBlock>
        </Masonry>
      </Container>
    </>
  );
}
