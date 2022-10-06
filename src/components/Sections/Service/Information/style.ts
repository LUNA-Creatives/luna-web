import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
    },
    container: {
      maxWidth: 1600,
    },
    flexBox: {
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    textBox: {
      width: '100%',
      paddingBottom: 20,
      color: theme.palette.primary.main,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        width: '45%',
        paddingBottom: 0,
      },
    },
    text: {
      paddingBottom: 10,
    },
    bold: {
      fontWeight: 600,
      paddingBottom: 10,
    },
    upperCase: {
      textTransform: 'uppercase',
    },
    inlineBox: {
      display: 'inline-flex',
      width: '100%',
    },
  })
);
