import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: 'black',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: '100%',
      paddingBottom: 50,

      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 300,
      },
    },
    box: {
      maxHeight: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      [theme.breakpoints.between('sm', 'md')]: {
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
