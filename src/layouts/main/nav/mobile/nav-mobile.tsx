import { usePathname } from 'src/routes/hooks';
import { NavProps } from '../types';
import { Drawer, IconButton, List } from '@mui/material';
import { useBoolean } from 'src/hooks';
import { useEffect } from 'react';
import SvgColor from 'src/components/svg-color';
import Logo from 'src/components/logo';

export default function NavMobile({ offsetTop, data }: NavProps) {
  const pathname = usePathname();
  const nav = useBoolean();

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
  }, [pathname]);

  return (
    <>
      <IconButton
        sx={{
          ml: 1,
          ...(offsetTop && {
            color: 'text.primary',
          }),
        }}
        onClick={nav.onTrue}
      >
        <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
      </IconButton>

      <Drawer
        PaperProps={{
          sx: {
            width: 260,
          },
        }}
        open={nav.value}
        onClose={nav.onFalse}
      >
        <>
          <Logo sx={{ mx: 2.5, my: 3 }} />
          <List component="nav" disablePadding>
            {data.map((link) => (
              <p key={link.title}>{link.title}</p>
            ))}
          </List>
        </>
      </Drawer>
    </>
  );
}
