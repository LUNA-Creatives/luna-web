import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.main,
      height: 400,
      [theme.breakpoints.up('md')]: {
        height: 200,
      },
    },
    border: {
      [theme.breakpoints.up(ipadBreakpoint)]: {
        width: '100%',
        maxWidth: 1600,
        borderTop: '0.001px solid darkgrey',
      },
    },
    container: {
      maxWidth: 1600,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      height: '100%',
      width: '100%',
      justifyContent: 'space-around',
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'space-between',
      },
    },
    box: {
      maxHeight: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      textAlign: 'center',
    },
    boxes: {
      width: 175,
    },
    logoContainer: {
      marginLeft: 5,
      marginRight: 5,
      maxWidth: 100,
      position: 'absolute',
    },
    textContainer: {
      position: 'absolute',
      width: 150,
    },
  })
);
