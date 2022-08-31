import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.main,
      paddingBottom: 100,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        paddingTop: 50,
        paddingBottom: 200,
      },
    },
    container: {
      maxWidth: 1600,
      position: 'relative',
    },
    headline: {
      paddingBottom: 50,
    },
    grid: {
      position: 'relative',
      top: 0,
      left: 0,
    },
    flexContainer: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    textBox: {
      padding: 30,
      display: 'flex',
      width: '100vw',
      flexDirection: 'column',
      alignSelf: 'center',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        width: '50vw',
      },
    },
    flexEnd: {
      flexDirection: 'row-reverse',
    },
    image: {
      width: '100%',
      borderRadius: '0.5%',
      objectFit: 'fill',
    },
  })
);
