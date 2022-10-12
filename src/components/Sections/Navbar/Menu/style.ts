import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { ipadBreakpoint } from '../../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      position: 'fixed',
      minWidth: '100vw',
      top: 0,
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      opacity: 1,
      alignItems: 'baseline',
      paddingTop: '20%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        alignItems: 'center',
        paddingTop: 0,
      },
    },
    flexContainer: {
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        placeContent: 'space-between',
        height: '30vh',
      },
    },
  })
);
