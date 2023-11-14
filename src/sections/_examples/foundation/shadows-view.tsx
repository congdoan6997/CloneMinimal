import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import Stack from '@mui/material/Stack';
import ComponentBlock from '../component-block';
import Paper, { PaperProps } from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function ShadowsView() {
  const theme = useTheme();
  const systemShadows = theme.shadows.slice(1, theme.shadows.length);
  const customShadows = [
    ['z1', theme.customShadows.z1],
    ['z4', theme.customShadows.z4],
    ['z8', theme.customShadows.z8],
    ['z12', theme.customShadows.z12],
    ['z16', theme.customShadows.z16],
    ['z20', theme.customShadows.z20],
    ['z24', theme.customShadows.z24],
    ['card', theme.customShadows.card],
    ['dropdown', theme.customShadows.dropdown],
    ['dialog', theme.customShadows.dialog],
  ];
  const colors = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;
  return (
    <>
      <Box sx={{ py: 5, bgcolor: theme.palette.mode === 'light' ? 'grey.200' : 'grey.800' }}>
        <Container>
          <CustomBreadcrumbs
            heading="Shadows"
            links={[{ name: 'Components', href: paths.components }, { name: 'Shadows' }]}
          ></CustomBreadcrumbs>
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={5}>
          <ComponentBlock title="System" spacing={0}>
            {systemShadows.map((item, index) => (
              <CardShadow key={index} title={`z${index + 1}`} sx={{ boxShadow: item }} />
            ))}
          </ComponentBlock>

          <ComponentBlock title="Customs" spacing={0}>
            {customShadows.map((item, index) => (
              <CardShadow key={index} title={item[0]} sx={{ boxShadow: item[1] }} />
            ))}
          </ComponentBlock>

          <ComponentBlock title="Colors" spacing={0}>
            {colors.map((item, index) => (
              <CardShadow
                key={index}
                title={item}
                sx={{
                  boxShadow: theme.customShadows[item],
                  bgcolor: theme.palette[item].main,
                  color: theme.palette[item].contrastText,
                }}
              />
            ))}
          </ComponentBlock>
        </Stack>
      </Container>
    </>
  );
}

function CardShadow({ title, sx }: PaperProps) {
  return (
    <Paper
      sx={{
        padding: 3,
        margin: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: {
          xs: 'calc((100%/2))',
          sm: 'calc((100%/4))',
          md: 'calc((100%/6))',
        },
        ...sx,
      }}
    >
      <Typography variant="subtitle2" sx={{ textTransform: 'capitalize' }}>
        {title}
      </Typography>
    </Paper>
  );
}
