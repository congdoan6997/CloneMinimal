import { Theme } from '@mui/material/styles';
import { defaultProps } from './default-props';
import merge from 'lodash.merge';

export function componentsOverrides(theme: Theme) {
  const components = merge(defaultProps(theme));
  return components;
}
