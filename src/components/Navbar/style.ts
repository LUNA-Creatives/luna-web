import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { ipadBreakpoint } from '../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: '100vw',
      display: 'flex',
      justifyContent: 'center',
    },
    container: {
      position: 'fixed',
      top: 0,
      display: 'flex',
      maxWidth: 1600,
      zIndex: 9000,
    },
    overlay: {
      display: 'flex',
      alignItems: 'center',
      zIndex: 8500,
      position: 'fixed',
      minWidth: '100vw',
      top: 0,
      height: '100vh',
      backgroundColor: theme.palette.primary.main,
      opacity: 0,
      transition: 'opacity 1s ease',
    },
    animation: {
      width: 150,
      height: 80,
      marginLeft: '-60px',
      zIndex: 9000,
      margin: 5,
      opacity: 1,
      transition: 'opacity 1s ease',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        marginLeft: '-70px',
      },
    },
    menuIcon: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 9999,
      height: 30,
      width: 30,
      position: 'absolute',
      right: 15,
      top: 15,
      cursor: 'pointer',
      margin: 10,
    },
    line: {
      height: 2,
      width: 30,
      display: 'block',
      marginBottom: 4,
      backgroundColor: theme.palette.primary.main,
    },
    left: {
      width: 15,
      backgroundColor: theme.palette.primary.main,
    },
    right: {
      width: 15,
      backgroundColor: theme.palette.primary.main,
    },
    closeIcon: {
      zIndex: 9999,
    },
    rotateRight: {
      backgroundColor: theme.palette.primary.dark,
      transform: 'translate(0px, 6px) rotate(-45deg)',
    },
    rotateLeft: {
      backgroundColor: theme.palette.primary.dark,
      transform: 'translate(0px, 0px) rotate(45deg)',
    },
    disabled: {
      display: 'none',
    },
    active: {
      opacity: 1,
    },
    easeInOut: {
      opacity: 0,
      zIndex: 100,
    },
  })
);
