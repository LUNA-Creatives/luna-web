import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    cardBox: {
      marginBottom: 10,
      minHeight: '100%',
      width: '100%',
      backgroundColor: '#292929',
      borderRadius: 8,
      color: theme.palette.primary.main,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        marginBottom: 0,
      },
    },
    innerBox: {
      padding: 20,
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
      marginBottom: 30,
    },
    activeText: {
      color: theme.palette.info.main,
    },
    disabledText: {
      color: '#979797',
    },
    textBox: {
      display: 'block',
      marginBottom: 10,
    },
    boldText: {
      fontWeight: 600,
    },
    active: {
      border: `2px solid${theme.palette.info.main}`,
    },
    listBox: {
      display: 'block',
      marginBottom: 30,
      [theme.breakpoints.up('md')]: {
        marginBottom: '25%',
      },
      [theme.breakpoints.up('lg')]: {
        marginBottom: '45%',
      },
    },
    inlineBox: {
      paddingLeft: 10,
      display: 'inline-flex',
      width: '100%',
    },
  })
);
