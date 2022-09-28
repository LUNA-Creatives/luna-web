import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      minHeight: '100%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        height: '100vh',
      },
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
        maxWidth: '60%',
        alignSelf: 'center',
      },
    },
    headline: {
      paddingTop: 14,
      paddingBottom: 14,
      minWidth: '100%',
    },
    text: {
      maxWidth: '100%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        maxWidth: '80%',
      },
    },
    button: {
      marginTop: 30,
      borderRadius: 2,
      padding: '15px 34px 15px 34px',
      textDecoration: 'none',
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.light,
      border: `1px solid${theme.palette.primary.light}`,
      '&:hover': {
        color: theme.palette.primary.light,
      },
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
