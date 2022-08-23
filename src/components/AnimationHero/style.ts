import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { ipadBreakpoint } from '../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minWidth: '100vw',
      height: '100vh',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    animationBox: {
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    animation: {
      [theme.breakpoints.up(ipadBreakpoint)]: {
        maxWidth: '50%',
      },
    },
  })
);
