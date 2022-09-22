import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',

      position: 'fixed',
      minWidth: '100vw',
      top: 0,
      height: '100vh',
      backgroundColor: theme.palette.primary.main,
      opacity: 1,
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
    heading: {
      paddingBottom: 10,
      paddingTop: 10,
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
    },
    extended: {
      width: '100%',
      transition: 'width 0.2s ease-in',
    },
  })
);
