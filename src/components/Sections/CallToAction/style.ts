import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.dark,
    },
    container: {
      maxWidth: 1600,
      paddingTop: '8%',
      paddingBottom: '8%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    box: {
      width: '100%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        maxWidth: '45%',
      },
    },
    textBox: {
      paddingBottom: '5%',
      width: '100%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        maxWidth: '45%',
        paddingBottom: 0,
      },
    },
    sectionBox: {
      paddingBottom: '5%',
    },
    subHeadline: { paddingBottom: 15 },
    button: {
      marginTop: 20,
      [theme.breakpoints.down(ipadBreakpoint)]: {
        width: '100%',
      },
      borderRadius: 2,
      backgroundColor: theme.palette.primary.dark,
      border: `1px solid${theme.palette.primary.dark}`,
      padding: '10px 34px 10px 34px',
      textDecoration: 'none',
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.primary.dark,
      },
    },
    underline: {
      marginTop: '7%',
      height: '100%',
      borderBottom: `1px solid${theme.palette.primary.dark}`,
    },
    routeLink: {
      textDecoration: 'none',
    },
  })
);
