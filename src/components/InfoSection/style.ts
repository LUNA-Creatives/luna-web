import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'black',
    },
    container: {
      paddingTop: 30,
      height: '90vh',

      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',

      flexDirection: 'column',
      justifyContent: 'space-evenly',

      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        textAlign: 'left',
      },
    },
    headline: {
      background: `-webkit-linear-gradient(45deg,  #798DF7, #6CCFF6 50%, #67F89D 99%)`,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
  })
);
