import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      width: '100%',
      backgroundColor: 'rgba(23, 23, 23, 0.8)',

      zIndex: 1,
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      borderRadius: 5,
      minHeight: '100%',
      maxWidth: '90%',
      backgroundColor: theme.palette.primary.dark,
      padding: '15% 8%',
      position: 'relative',
      color: theme.palette.primary.main,
      filter: `drop-shadow(0 0 0.4rem black)`,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        height: '100%',
        width: 'auto',
        padding: '8%',
      },
    },
    box: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        justifyContent: 'space-around',
      },
    },
    textBox: {
      paddingBottom: 30,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        paddingBottom: 50,
        width: '80%',
      },
    },
    flexBox: {
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        flexDirection: 'row',
      },
      [theme.breakpoints.down(ipadBreakpoint)]: {
        '& > :first-child': { marginBottom: 30 },
      },
    },
    columnBox: {
      width: ' 50%',
    },
    link: {
      color: theme.palette.primary.main,
      cursor: 'pointer',
    },
    headline: {
      paddingBottom: 20,
      textTransform: 'uppercase',
      [theme.breakpoints.down(ipadBreakpoint)]: {
        paddingBottom: 0,
      },
    },
    closeButton: {
      margin: 10,
      top: 0,
      right: 0,
      position: 'absolute',
      cursor: 'pointer',
    },
  })
);
