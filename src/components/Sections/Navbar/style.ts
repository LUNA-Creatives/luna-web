import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: '100vw',
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
    },
    container: {
      position: 'fixed',
      display: 'flex',
      maxWidth: 1800,
      top: 20,
      [theme.breakpoints.down(ipadBreakpoint)]: {
        top: 0,
        left: 0,
      },
      zIndex: 9000,
    },
    overlay: {
      zIndex: 8500,
      position: 'fixed',
      width: 0,
      top: 0,
      left: 0,
      height: 0,
      opacity: 0,
      transition: 'opacity 0.5s ease-in-out',
    },
    animation: {
      width: 150,
      height: 80,
      marginLeft: '-60px',
      zIndex: 9000,
      margin: 5,
      opacity: 1,
      transition: 'opacity 0.5s ease',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        marginLeft: '-70px',
      },
    },
    menuIcon: {
      display: 'flex',
      flexDirection: 'column',
      zIndex: 9999,
      height: 30,
      width: 30,
      position: 'absolute',
      right: 15,
      top: 6,
      cursor: 'pointer',
      margin: 10,
      justifyContent: 'space-around',
    },
    line: {
      height: 2,
      width: 30,
      display: 'block',
      backgroundColor: theme.palette.primary.main,
    },
    closeIcon: {
      justifyContent: 'center',
    },
    rotate: {
      height: 2,
      width: 35,
      display: 'block',
      marginBottom: 4,
      backgroundColor: theme.palette.primary.dark,
    },
    right: {
      transform: 'translate(0px, 6px) rotate(45deg)',
    },
    left: {
      transform: 'translate(0px, 0px) rotate(-45deg)',
    },
    disabled: {
      display: 'none',
    },
    active: {
      opacity: 1,
      height: '100%',
      width: '100%',
    },
    easeInOut: {
      opacity: 0,
      zIndex: 100,
    },
  })
);
