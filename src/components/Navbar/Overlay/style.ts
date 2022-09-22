import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    overlay: {
      display: 'flex',
      alignItems: 'center',
      zIndex: 8500,
      position: 'fixed',
      minWidth: '100vw',
      top: 0,
      height: '100vh',
      backgroundColor: theme.palette.primary.main,
      opacity: 1,
      transition: 'opacity 1s ease',
    },
    textContainer: {},
    textBox: {
      height: '100%',
      width: '100%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        placeContent: 'space-between',
      },
    },
    linkBox: {
      width: 'fit-content',
    },
    underline: {
      height: 2,
      display: 'block',
      width: 15,
      backgroundColor: theme.palette.primary.dark,
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.dark,
    },
    extended: {
      width: '100%',
    },
  })
);
