import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import ComponentBlock from '../component-block';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export default function GridsView() {
  const theme = useTheme();
  const [spacing, setSpacing] = useState<number>(2);
  const [column, setColumn] = useState<number>(2);
  return (
    <>
      <Box sx={{ py: 5, bgcolor: theme.palette.mode === 'light' ? 'grey.200' : 'grey.800' }}>
        <Container>
          <CustomBreadcrumbs
            heading="Grid"
            links={[{ name: 'Components', href: paths.components }, { name: 'Grid' }]}
          ></CustomBreadcrumbs>
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={5}>
          <ComponentBlock title="Spacing">
            <Paper
              variant="outlined"
              sx={{
                p: 5,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 1.5,
                bgcolor: theme.palette.grey[theme.palette.mode === 'light' ? 100 : 800],
              }}
            >
              <Typography variant="body2" sx={{ textAlign: 'center', mb: 3 }}>
                Spacing: <strong>{spacing}</strong>
              </Typography>
              <Grid container spacing={spacing}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <Grid key={item} xs={1}>
                    <Paper
                      sx={{
                        height: 100,
                        boxShadow: theme.customShadows.z8,
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
              <RadioGroup
                row
                name="spacing"
                value={spacing.toString()}
                onChange={(e) => setSpacing(Number(e.target.value))}
                sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
              >
                {[0, 1, 2, 3, 4, 5].map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item.toString()}
                    label={item.toString()}
                    control={<Radio />}
                  />
                ))}
              </RadioGroup>
            </Paper>
          </ComponentBlock>
          <ComponentBlock title="Column">
            <Paper
              variant="outlined"
              sx={{
                p: 5,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 1.5,
                bgcolor: theme.palette.grey[theme.palette.mode === 'light' ? 100 : 800],
              }}
            >
              <Grid spacing={3} container>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                  <Grid key={item} xs={column}>
                    <Paper
                      sx={{
                        py: 3,
                        textAlign: 'center',
                        boxShadow: theme.customShadows.z8,
                      }}
                    >
                      xs = {column}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <RadioGroup
                row
                name="column"
                value={column.toString()}
                onChange={(e) => setColumn(Number(e.target.value))}
                sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
              >
                {[12, 6, 4, 3, 2, 1].map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item.toString()}
                    label={item.toString()}
                    control={<Radio />}
                  />
                ))}
              </RadioGroup>
            </Paper>
          </ComponentBlock>
        </Stack>
      </Container>
    </>
  );
}
