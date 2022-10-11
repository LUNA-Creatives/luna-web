import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { ipadBreakpoint } from '../../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
    },
    container: {
      maxWidth: 1600,
      color: theme.palette.primary.main,
      paddingTop: 20,
      paddingBottom: 30,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        paddingTop: 0,
        paddingBottom: 75,
      },
    },
    textBox: {
      paddingBottom: 10,
    },
    headline: {
      paddingBottom: 10,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        paddingBottom: 20,
      },
    },
    bold: {
      fontWeight: 600,
    },
    text: {
      paddingBottom: 10,
    },
    upperCase: {
      textTransform: 'uppercase',
    },
    linkBox: {
      width: '100%',
    },
    link: {
      cursor: 'pointer',
    },
    inlineBox: {
      display: 'inline-flex',
    },
  })
);
