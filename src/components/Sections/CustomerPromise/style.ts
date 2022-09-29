import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.secondary.light,
      backgroundColor: theme.palette.primary.dark,
    },
    container: {
      maxWidth: 1600,
    },
    flexBox: {
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    textBox: {
      maxWidth: '100%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        maxWidth: '50%',
      },
    },
    imageBox: {
      maxWidth: '50%',
    },
    image: {
      width: '100%',
    },
    headline: {
      paddingTop: '5%',
      paddingBottom: '2%',
    },
    text: {
      paddingBottom: '5%',
    },
    button: {
      color: theme.palette.primary.dark,
      [theme.breakpoints.down(ipadBreakpoint)]: {
        marginTop: '5%',
        width: '100%',
      },
      borderRadius: 2,
      padding: '15px 34px 15px 34px',
      textDecoration: 'none',
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.light,
      border: `1px solid${theme.palette.primary.light}`,
      '&:hover': {
        color: theme.palette.primary.light,
      },
    },
  })
);
