import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: 100,
    },
    container: {
      paddingTop: 100,
      paddingBottom: 100,
      borderTop: '0.001px solid darkgrey',
      borderBottom: '0.001px solid darkgrey',
    },

    flexbox: {
      maxWidth: 1600,

      display: 'flex',
      flexDirection: 'column',
      placeContent: 'space-between',

      [theme.breakpoints.up(ipadBreakpoint)]: {
        paddingTop: 150,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
      },
    },
    textBox: {
      paddingBottom: 50,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        width: '50vw',
      },
    },
    box: {
      width: 'auto',
    },
    icon: {
      color: theme.palette.primary.main,
    },
    iconBox: {
      display: 'flex',
      alignItems: 'center',
      width: '70%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        width: '50v%',
      },
      padding: 5,
    },
    socialIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '30%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        width: '50v%',
      },
    },
    gridContainer: {
      height: '100%',
      display: 'flex',
      flexWrap: 'wrap',
    },
    text: {
      color: theme.palette.primary.main,
      padding: 20,
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        justifyContent: 'right',
      },
    },
  })
);
