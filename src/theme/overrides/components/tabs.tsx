import { Theme } from '@mui/material/styles';

export function tabs(theme: Theme) {
  return {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: theme.palette.text.primary,
        },
      },
    },
  };
}
