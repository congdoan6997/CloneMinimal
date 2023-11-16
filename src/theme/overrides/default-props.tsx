import { Theme } from '@mui/material/styles';

export function defaultProps(theme: Theme) {
  return {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
      },
    },
    MuiAvatarGroup: {
      defaultProps: {
        max: 4,
      },
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          typography: 'subtitle2',
        },
        secondaryTypographyProps: {
          component: 'span',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        color: 'inherit',
        disableElevation: true,
      },
    },
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  };
}
