import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.main,
    },
    container: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
      flexDirection: 'row',
      maxWidth: 1600,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        height: '90vh',
      },
    },
    secondaryContainer: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: 1600,
    },
    box: {
      display: 'flex',
      flexDirection: 'column-reverse',

      [theme.breakpoints.up(ipadBreakpoint)]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    textBox: {
      color: theme.palette.primary.main,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        maxWidth: '70%',
        alignSelf: 'center',
      },
    },
    headline: {
      paddingTop: 14,
      paddingBottom: 14,

      [theme.breakpoints.down(ipadBreakpoint)]: {
        minWidth: '100%',
      },
    },
    text: {
      minWidth: '100%',
    },
    button: {
      marginTop: 30,
      borderRadius: 2,
      padding: '15px 34px 15px 34px',
      textDecoration: 'none',
      cursor: 'pointer',
      [theme.breakpoints.down(ipadBreakpoint)]: {
        width: '100%',
      },
    },
    animation: {
      maxWidth: '60vw',
      alignSelf: 'center',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        maxWidth: '40vw',
      },
    },
    icon: {
      marginRight: 10,
    },
  })
);
