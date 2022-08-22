import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'black',

      paddingTop: 100,
      color: 'white',
    },
    container: {
      paddingTop: 100,
      paddingBottom: 100,

      borderTop: '0.001px solid darkgrey',
    },
    heading: {
      paddingTop: 50,
      marginBottom: '10vh',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        paddingTop: 100,
      },
    },
    text: {
      marginRight: 8,
      fontWeight: 300,
    },
    infobox: {
      display: 'flex',
      flexDirection: 'column',
    },
    flexbox: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 50,
      placeContent: 'space-between',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        maxWidth: '60%',
      },
    },
    box: {
      display: 'flex',
      alignItems: 'center',
      height: '5vh',
    },
    textbox: {
      display: 'flex',
      flexDirection: 'column',
      height: '20vh',
      justifyContent: 'space-around',
    },
    icon: {
      marginRight: 8,
    },
  })
);
