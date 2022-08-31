import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
    },
    container: {
      paddingTop: 30,
      height: '90vh',
      maxWidth: 1600,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
      flexDirection: 'row',
    },
    headline: {
      background: `-webkit-linear-gradient(45deg,  ${theme.palette.secondary.dark}, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.light} 99%)`,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
  })
);
