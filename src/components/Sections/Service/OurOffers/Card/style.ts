import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    cardBox: {
      marginBottom: 10,
      minHeight: '45vh',
      width: '100%',
      backgroundColor: '#292929',
      borderRadius: 8,
      color: theme.palette.primary.main,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        marginBottom: 0,
        display: 'flex',
        minHeight: '100%',
      },
    },
    innerBox: {
      padding: 20,
      display: 'flex',
      minHeight: 'inherit',
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
    upperCase: {
      textTransform: 'uppercase',
    },
    flexBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headlineBox: {
      display: 'inline-flex',
      placeItems: 'baseline',
      marginBottom: 10,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        marginBottom: 30,
      },
    },
    activeText: {
      color: theme.palette.info.main,
    },
    disabledText: {
      color: '#979797',
    },
    textBox: {
      marginBottom: 10,
    },
    boldText: {
      fontWeight: 600,
    },
    active: {
      border: `2px solid${theme.palette.info.main}`,
    },
    listBox: {
      marginBottom: 20,

      [theme.breakpoints.up(ipadBreakpoint)]: {
        marginBottom: '30%',
      },
    },
    inlineBox: {
      paddingLeft: 10,
      display: 'inline-flex',
      width: '100%',
    },
    text: {
      paddingTop: 10,
    },
  })
);
