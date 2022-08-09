import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: 30,
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        textAlign: 'left',
      },
    },
    headline: {
      color: theme.palette.secondary.main,
      background: `-webkit-linear-gradient(45deg,  #798DF7, #6CCFF6 50%, #67F89D 99%)`,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    animation: {
      [theme.breakpoints.up('xl')]: {
        maxWidth: '50%',
      },
    },
  })
);
