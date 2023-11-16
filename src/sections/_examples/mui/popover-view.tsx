import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import ComponentBlock from '../component-block';
import Button from '@mui/material/Button';
import CustomPopover, { MenuPopoverArrowValue, usePopover } from 'src/components/custom-popover';
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export default function PopoverView() {
  const theme = useTheme();
  const [arrow, setArrow] = useState<MenuPopoverArrowValue>('top-left');
  const clickPopover = usePopover();
  const hoverPopover = usePopover();
  const customizedPopover = usePopover();

  const handleChangeArrow = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArrow(event.target.value as MenuPopoverArrowValue);
  };
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
            heading="Popover"
            links={[
              {
                name: 'Components',
                href: paths.components,
              },
              { name: 'Popover' },
            ]}
            moreLink={['https://mui.com/components/popover']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Box
          gap={3}
          display={'grid'}
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          sx={{ mb: 3 }}
        >
          <ComponentBlock title="Click">
            <Button onClick={clickPopover.onOpen} variant="contained">
              Open popover
            </Button>
            <Popover
              open={Boolean(clickPopover.open)}
              anchorEl={clickPopover.open}
              onClose={clickPopover.onClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box sx={{ p: 2, maxWidth: 280 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Etiam feugiat lorem non metus
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis.
                </Typography>
              </Box>
            </Popover>
          </ComponentBlock>
          <ComponentBlock title="Hover">
            <Typography
              aria-aria-owns={hoverPopover.open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={hoverPopover.onOpen}
              onMouseLeave={hoverPopover.onClose}
            >
              Hover with a Popover.
            </Typography>
            <Popover
              open={Boolean(hoverPopover.open)}
              id="mouse-over-popover"
              anchorEl={hoverPopover.open}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={hoverPopover.onClose}
              disableRestoreFocus
              sx={{
                pointerEvents: 'none',
              }}
            >
              <Box sx={{ p: 2, maxWidth: 280 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Etiam feugiat lorem non metus
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis.
                </Typography>
              </Box>
            </Popover>
          </ComponentBlock>
        </Box>
        <ComponentBlock title="Customized">
          <Button variant="contained" onClick={customizedPopover.onOpen} sx={{ mr: 5 }}>
            Open Customized
          </Button>
          <FormControl>
            <FormLabel sx={{ typography: 'body2' }}>Arrow</FormLabel>
            <RadioGroup value={arrow} onChange={handleChangeArrow}>
              {[
                'top-left',
                'top-center',
                'top-right',
                'bottom-left',
                'bottom-center',
                'bottom-right',
                'left-top',
                'left-center',
                'left-bottom',
                'right-top',
                'right-center',
                'right-bottom',
              ].map((position) => (
                <FormControlLabel
                  key={position}
                  value={position}
                  control={<Radio />}
                  label={position}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <CustomPopover
            open={customizedPopover.open}
            onClose={customizedPopover.onClose}
            arrow={arrow}
          >
            <Box sx={{ p: 2, maxWidth: 280 }}>
              <Typography variant="subtitle1" gutterBottom>
                Etiam feugiat lorem non metus
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis.
              </Typography>
            </Box>
          </CustomPopover>
        </ComponentBlock>
      </Container>
    </>
  );
}
