import { withStyles, Theme } from '@material-ui/core';

// ----------------------------------------------------------------------

const GlobalStyles = withStyles((theme: Theme) => ({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    html: {
      width: '100%',
      height: '100%',
      '-ms-text-size-adjust': '100%',
      '-webkit-overflow-scrolling': 'touch',
    },
    body: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.main,
    },
    '#root': {
      width: '100%',
      height: '100%',
    },
  },
}))(() => null);

export default GlobalStyles;
