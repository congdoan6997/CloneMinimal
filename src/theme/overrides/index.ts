import { Theme } from '@mui/material/styles';
import { defaultProps } from './default-props';
import merge from 'lodash.merge';
import { avatar } from './components/avatar';
import { badge } from './components/badge';
import { dialog } from './components/dialog';
import list from './components/list';
import { switches } from './components/switch';
import { button } from './components/button';
import { popover } from './components/popover';

export function componentsOverrides(theme: Theme) {
  const components = merge(
    defaultProps(theme),
    avatar(theme),
    badge(theme),
    dialog(theme),
    list(theme),
    switches(theme),
    button(theme),
    popover(theme)
  );
  return components;
}
