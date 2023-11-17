import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import ComponentBlock from '../component-block';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Iconify from 'src/components/iconify';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
const TABS = [
  {
    value: 'one',
    icon: <Iconify icon="solar:phone-bold" width={24} />,
    label: 'Item one',
  },
  {
    value: 'two',
    icon: <Iconify icon="solar:heart-bold" width={24} />,
    label: 'Item two',
  },
  {
    value: 'three',
    icon: <Iconify icon="eva:headphones-fill" width={24} />,
    label: 'Item three',
    disabled: true,
  },

  {
    value: 'four',
    icon: <Iconify icon="eva:headphones-fill" width={24} />,
    label: 'Item Four',
  },
  {
    value: 'five',
    icon: <Iconify icon="eva:headphones-fill" width={24} />,
    label: 'Item Five',
    disabled: true,
  },
  {
    value: 'six',
    icon: <Iconify icon="eva:headphones-fill" width={24} />,
    label: 'Item Six',
  },
  {
    value: 'seven',
    icon: <Iconify icon="eva:headphones-fill" width={24} />,
    label: 'Item Seven',
  },
];
export default function TabsView() {
  const [currentTab, setCurrentTab] = useState(TABS[0].value);
  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  const [currentScrollTab, setCurrentScrollTab] = useState(TABS[0].value);
  const handleChangeScrollTab = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentScrollTab(newValue);
  };
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
            heading="Tabs"
            links={[
              {
                name: 'Components',
                href: paths.components,
              },
              { name: 'Tabs' },
            ]}
            moreLink={['https://mui.com/components/tabs']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
          <ComponentBlock title="Text">
            <Stack spacing={2} sx={{ width: 1 }}>
              <Tabs value={currentTab} onChange={handleChangeTab}>
                {TABS.slice(0, 3).map((tab) => (
                  <Tab key={tab.value} value={tab.value} label={tab.label} />
                ))}
              </Tabs>
              {TABS.slice(0, 3).map(
                (tab) =>
                  tab.value === currentTab && (
                    <Box
                      key={tab.value}
                      sx={{ bgcolor: 'background.neutral', p: 2, borderRadius: 1 }}
                    >
                      {tab.label}
                    </Box>
                  )
              )}
            </Stack>
          </ComponentBlock>

          <ComponentBlock title="Icon">
            <Tabs value={currentTab} onChange={handleChangeTab}>
              {TABS.slice(0, 3).map((tab) => (
                <Tab key={tab.value} value={tab.value} icon={tab.icon} />
              ))}
            </Tabs>
          </ComponentBlock>

          <ComponentBlock title="Bottom">
            <Tabs value={currentTab} onChange={handleChangeTab}>
              {TABS.slice(0, 3).map((tab) => (
                <Tab
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={tab.label}
                  disabled={tab.disabled}
                  iconPosition="bottom"
                />
              ))}
            </Tabs>
          </ComponentBlock>
          <ComponentBlock title="Start">
            <Tabs value={currentTab} onChange={handleChangeTab}>
              {TABS.slice(0, 3).map((tab) => (
                <Tab
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={tab.label}
                  disabled={tab.disabled}
                  iconPosition="start"
                />
              ))}
            </Tabs>
          </ComponentBlock>
          <ComponentBlock title="End">
            <Tabs value={currentTab} onChange={handleChangeTab}>
              {TABS.slice(0, 3).map((tab) => (
                <Tab
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={tab.label}
                  disabled={tab.disabled}
                  iconPosition="end"
                />
              ))}
            </Tabs>
          </ComponentBlock>

          <ComponentBlock title="Scrollable">
            <Box sx={{ flexGrow: 1, width: '100%', maxWidth: 320 }}>
              <Tabs value={currentScrollTab} onChange={handleChangeScrollTab}>
                {TABS.map((tab) => (
                  <Tab key={tab.value} value={tab.value} label={tab.label} />
                ))}
              </Tabs>
            </Box>
          </ComponentBlock>
        </Masonry>
      </Container>
    </>
  );
}
