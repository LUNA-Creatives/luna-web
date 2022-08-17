import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: 'black',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      height: '70%',
      borderBottom: '0.001px solid darkgrey',
      borderTop: '0.001px solid darkgrey',

      [theme.breakpoints.up('md')]: {
        height: '50%',
      },
    },
    box: {
      maxHeight: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        width: '50vw',
      },
    },
    image: {
      marginLeft: 5,
      marginRight: 5,
      width: 100,
      position: 'absolute',
    },
  })
);
