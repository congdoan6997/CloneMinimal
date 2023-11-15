import Popover, { PopoverOrigin } from '@mui/material/Popover';
import { MenuPopoverProps } from './types';
import { getPosition } from './utils';
import { menuItemClasses } from '@mui/material';
import { StyledArrow } from './styles';

export default function CustomPopover({
  open,
  children,
  arrow = 'top-right',
  hiddenArrow,
  sx,
  ...other
}: MenuPopoverProps) {
  const { style, anchorOrigin, transformOrigin } = getPosition(arrow);
  return (
    <Popover
      anchorOrigin={anchorOrigin as PopoverOrigin}
      transformOrigin={transformOrigin as PopoverOrigin}
      open={Boolean(open)}
      anchorEl={open}
      {...other}
      slotProps={{
        paper: {
          sx: {
            width: 'auto',
            overflow: 'inherit',
            ...style,
            [`& .${menuItemClasses.root}`]: {
              '& svg': {
                mr: 2,
                flexShrink: 0,
              },
            },
            ...sx,
          },
        },
      }}
    >
      {!hiddenArrow && <StyledArrow arrow={arrow} />}
      {children}
    </Popover>
  );
}
