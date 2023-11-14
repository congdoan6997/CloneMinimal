import { Theme } from '@mui/material/styles';
import { defaultProps } from './default-props';
import merge from 'lodash.merge';
import { avatar } from './components/avatar';
import { badge } from './components/badge';
import { dialog } from './components/dialog';

export function componentsOverrides(theme: Theme) {
  const components = merge(defaultProps(theme), avatar(theme), badge(theme), dialog(theme));
  return components;
}
