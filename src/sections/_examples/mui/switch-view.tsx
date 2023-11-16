// @mui

import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import ComponentBlock from '../component-block';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const PLACEMENTS = ['top', 'start', 'bottom', 'end'] as const;
const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;
export default function SwitchView() {
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
            heading="Switch"
            links={[
              {
                name: 'Components',
                href: paths.components,
              },
              { name: 'Switch' },
            ]}
            moreLink={['https://mui.com/components/switches']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
          <ComponentBlock title="Basic">
            <Switch defaultChecked />
            <Switch />
            <Switch disabled />
            <Switch disabled checked />
            <Switch defaultChecked color="default" />
          </ComponentBlock>

          <ComponentBlock title="Sizes">
            <FormGroup row>
              <FormControlLabel control={<Switch size="small" />} label="Small" />
              <FormControlLabel control={<Switch />} label="Normal" />
            </FormGroup>
          </ComponentBlock>

          <ComponentBlock title="Placement">
            <FormGroup row>
              {PLACEMENTS.map((placement) => (
                <FormControlLabel
                  key={placement}
                  labelPlacement={placement}
                  control={<Switch />}
                  label={placement}
                  sx={{ textTransform: 'capitalize' }}
                />
              ))}
            </FormGroup>
          </ComponentBlock>
          <ComponentBlock title="Colors">
            <FormGroup>
              {COLORS.map((color) => (
                <FormControlLabel
                  key={color}
                  control={<Switch defaultChecked color={color} />}
                  label={color}
                  sx={{ textTransform: 'capitalize' }}
                />
              ))}
              <FormControlLabel control={<Switch disabled />} label="Disabled" />
            </FormGroup>
          </ComponentBlock>
        </Masonry>
      </Container>
    </>
  );
}
