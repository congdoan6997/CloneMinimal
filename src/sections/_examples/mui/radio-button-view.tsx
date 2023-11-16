import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import ComponentBlock from '../component-block';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

const PLACEMENTS = ['top', 'start', 'bottom', 'end'] as const;

// ----------------------------------------------------------------------

export default function RadioButtonView() {
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
        <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
          <ComponentBlock title="Basic">
            <FormControl component="fieldset">
              <RadioGroup row defaultValue="nn">
                <Radio size="medium" value={'nn'} />
                <Radio size="medium" value={'gg'} />
                <Radio size="medium" value={'hh'} disabled />
              </RadioGroup>
            </FormControl>
          </ComponentBlock>

          <ComponentBlock title="Size">
            <FormControl component="fieldset">
              <RadioGroup row defaultValue="g">
                <FormControlLabel value={'g'} control={<Radio size="medium" />} label="Normal" />
                <FormControlLabel value={'h'} control={<Radio size="small" />} label="Small" />
              </RadioGroup>
            </FormControl>
          </ComponentBlock>

          <ComponentBlock title="Placements">
            <FormControl component="fieldset">
              <RadioGroup row defaultValue="top">
                {PLACEMENTS.map((placement) => (
                  <FormControlLabel
                    key={placement}
                    value={placement}
                    label={placement}
                    labelPlacement={placement}
                    control={<Radio size="medium" />}
                    sx={{ textTransform: 'capitalize' }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </ComponentBlock>

          <ComponentBlock title="Colors">
            <FormControl component={'fieldset'}>
              <RadioGroup>
                {COLORS.map((color) => (
                  <FormControlLabel
                    key={color}
                    value={color}
                    label={color}
                    control={<Radio size="medium" color={color} />}
                  />
                ))}
                <FormControlLabel
                  disabled
                  value={'error1'}
                  label="Disabled"
                  control={<Radio size="medium" color="error" />}
                />
              </RadioGroup>
            </FormControl>
          </ComponentBlock>
        </Masonry>
      </Container>
    </>
  );
}
