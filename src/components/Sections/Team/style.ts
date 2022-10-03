import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.main,
    },
    container: {
      maxWidth: 1600,
      paddingTop: 10,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        paddingTop: 50,
      },
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '100%',
    },
    headline: {
      paddingBottom: 20,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        paddingBottom: 50,
      },
      [theme.breakpoints.up('lg')]: {
        textAlign: 'left',
        paddingBottom: '5%',
      },
    },
  })
);
