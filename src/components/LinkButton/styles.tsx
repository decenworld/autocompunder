import type { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  link: {
    display: 'inline-flex',
    flexDirection: 'row' as const,
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.vaults.defaultOutline,
    padding: '2px 8px',
    borderRadius: '4px',
    '& $icon:first-child': {
      marginRight: '4px',
    },
    '& $icon:last-child': {
      marginLeft: '4px',
    },
    '&:hover': {
      color: theme.palette.text.primary,
      backgroundColor: '#3F466D',
      transition: 'color 0.1s',
    },
  },
  icon: {},
});
