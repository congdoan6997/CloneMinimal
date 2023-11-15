import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import ComponentBlock from '../../component-block';
import SimpleList from './simple-list';
import NestedList from './nested-list';
import FolderList from './folder-list';
import SelectedList from './selected-list';
import ControlList from './control-list';
import SwitchList from './switch-list';

export default function ListView() {
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
            heading="List"
            links={[
              {
                name: 'Components',
                href: paths.components,
              },
              { name: 'List' },
            ]}
            moreLink={['https://mui.com/components/lists']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
          <ComponentBlock title="Simple">
            <SimpleList />
          </ComponentBlock>

          <ComponentBlock title="Nested">
            <NestedList />
          </ComponentBlock>

          <ComponentBlock title="Folder">
            <FolderList />
          </ComponentBlock>

          <ComponentBlock title="Selected">
            <SelectedList />
          </ComponentBlock>

          <ComponentBlock title="Controls">
            <ControlList />
          </ComponentBlock>
          <ComponentBlock title="Switch">
            <SwitchList />
          </ComponentBlock>
        </Masonry>
      </Container>
    </>
  );
}
