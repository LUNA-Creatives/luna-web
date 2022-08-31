import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.main,
      height: '70%',
      paddingBottom: 100,
      [theme.breakpoints.up('md')]: {
        height: '50%',
      },
    },
    border: {
      height: '100%',
      borderBottom: '0.001px solid darkgrey',
      borderTop: '0.001px solid darkgrey',
    },
    container: {
      maxWidth: 1600,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      height: '100%',
      width: '100%',
      justifyContent: 'space-around',
      // color: theme.palette.primary.contrastText,
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'space-between',
      },
    },
    box: {
      maxHeight: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      textAlign: 'center',
    },
    boxes: {
      width: 150,
    },
    logoContainer: {
      marginLeft: 5,
      marginRight: 5,
      maxWidth: 100,
      position: 'absolute',
    },
    textContainer: {
      position: 'absolute',
      width: 150,
    },
  })
);
