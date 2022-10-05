import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: { backgroundColor: '#F5F5F5' },
    container: {
      maxWidth: 1600,
      paddingTop: 80,
      paddingBottom: 20,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        paddingTop: 120,
        paddingBottom: 100,
      },
    },
    flexBox: {
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 50,
      },
    },
    textBox: {
      display: 'block',
      width: '50%',
      [theme.breakpoints.down(ipadBreakpoint)]: {
        paddingBottom: 30,
        width: '100%',
      },
    },
    linkBox: {
      width: 'fit-content',
    },
    headline: {
      paddingBottom: 10,
    },
    text: {
      maxWidth: '80%',
    },
    link: {
      color: theme.palette.primary.dark,
      maxWidth: '100%',
      cursor: 'pointer',
    },
    bold: {
      fontWeight: 500,
    },
    copyRights: {
      padding: 20,
      display: 'flex',
      justifyContent: 'right',
    },
  })
);
