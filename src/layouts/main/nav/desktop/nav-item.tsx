import { forwardRef } from 'react';
import { NavItemDesktopProps } from '../types';
import Link from '@mui/material/Link';
import { RouterLink } from 'src/routes/components';
import { ListItem } from './styles';
import Iconify from 'src/components/iconify';

export const NavItem = forwardRef<HTMLDivElement, NavItemDesktopProps>(
  ({ item, open, offsetTop, active, subItem, externalLink, ...other }, ref) => {
    const { title, path, children } = item;
    const renderContent = (
      <ListItem
        ref={ref}
        offsetTop={offsetTop}
        subItem={subItem}
        active={active}
        open={open}
        {...other}
      >
        {title}
        {!!children && <Iconify width={16} icon="eva:arrow-ios-downward-fill" sx={{ ml: 1 }} />}
      </ListItem>
    );

    // External link
    if (externalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      );
    }

    // Has child
    if (children) {
      return renderContent;
    }

    // Default
    return (
      <Link component={RouterLink} underline="none" href={path}>
        {renderContent}
      </Link>
    );
  }
);
