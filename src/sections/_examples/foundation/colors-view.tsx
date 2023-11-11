import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTheme, alpha, hexToRgb } from '@mui/material/styles';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';

const PALETTE = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;
const VARIATION = ['lighter', 'light', 'main', 'dark', 'darker'] as const;
const GREY = ['100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;

export default function ColorsView() {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ py: 5, bgcolor: theme.palette.mode === 'light' ? 'grey.200' : 'grey.800' }}>
        <Container>
          <CustomBreadcrumbs
            heading="Color"
            links={[{ name: 'Components', href: paths.components }, { name: 'Color' }]}
            moreLink={['https://mui.com/customization/color', 'https://colors.eva.design']}
          ></CustomBreadcrumbs>
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Box
          display="grid"
          gap={3}
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {PALETTE.map((color) => (
            <Stack
              key={color}
              sx={{
                borderRadius: 1,
                overflow: 'hidden',
                boxShadow: theme.customShadows.card,
              }}
            >
              <Typography variant="h5" sx={{ textTransform: 'capitalize', p: 2.5, pb: 0 }}>
                {color}
              </Typography>
              <Stack spacing={1} sx={{ p: 2.5 }}>
                {VARIATION.map((vari) => (
                  <ColorCard
                    key={vari}
                    hexColor={theme.palette[color][vari]}
                    vari={vari}
                  ></ColorCard>
                ))}
              </Stack>
            </Stack>
          ))}

          <Stack
            sx={{
              borderRadius: 1,
              overflow: 'hidden',
              boxShadow: theme.customShadows.card,
            }}
          >
            <Typography variant="h5" sx={{ textTransform: 'capitalize', p: 2.5, pb: 0 }}>
              Grey
            </Typography>
            <Stack spacing={1} sx={{ p: 2.5 }}>
              {GREY.map((vari) => (
                <ColorCard key={vari} hexColor={theme.palette.grey[vari]} vari={vari}></ColorCard>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

type ColorCardProps = {
  hexColor: string;
  vari: string;
};

function ColorCard({ hexColor, vari }: ColorCardProps) {
  return (
    <Stack
      spacing={1}
      sx={{
        px: 2,
        py: 1.5,
        borderRadius: 1,
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        bgcolor: hexColor,
        color: (theme) => theme.palette.getContrastText(hexColor),
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.08)}`,
        '&:hover': {
          bgcolor: alpha(hexColor, 0.8),
        },
        transition: (theme) =>
          theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.shorter,
          }),
      }}
    >
      <Typography variant="subtitle2" sx={{ textTransform: 'capitalize' }}>
        {vari}
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        sx={{ typography: 'caption' }}
        gap={2.5}
      >
        <Box>
          <Box component="span">Hex </Box>
          {hexColor}
        </Box>

        <Box>
          <Box component="span">Rgb </Box>
          {hexToRgb(hexColor).replace('rgb(', '').replace(')', '')}
        </Box>
      </Box>
    </Stack>
  );
}
