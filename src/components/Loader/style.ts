import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { ipadBreakpoint } from '../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.primary.dark,
      minWidth: '100vw',
      height: '100vh',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    animationBox: {
      width: '100vw',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    animation: {
      width: '100%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        maxWidth: '50%',
      },
    },
  })
);
