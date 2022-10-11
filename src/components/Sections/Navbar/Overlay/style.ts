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
    textBox: {
      paddingTop: 10,
      paddingBottom: 10,
    },
    textContainer: {
      height: '100%',
      width: '100%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        placeContent: 'space-between',
      },
    },
    headline: {
      paddingBottom: 10,
      paddingTop: 10,
      textTransform: 'uppercase',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        paddingBottom: 20,
      },
    },
    linkBox: {
      width: 'fit-content',
      paddingBottom: 10,
    },
    underline: {
      height: 2,
      display: 'block',
      width: 15,
      transition: 'width 0.2s ease-out',
      backgroundColor: theme.palette.primary.dark,
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    },
    extended: {
      width: '100%',
      transition: 'width 0.2s ease-in',
    },
    active: {
      width: '100%',
      transition: 'width 0.2s ease-in',
    },
    toggleItems: {
      display: 'none',
    },
    showToggleItems: {
      display: 'block',
      paddingLeft: '15%',
    },
  })
);
