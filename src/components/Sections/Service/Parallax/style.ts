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
    },
    upperCase: {
      textTransform: 'uppercase',
      width: '100%',
      paddingBottom: 30,
      [theme.breakpoints.up(ipadBreakpoint)]: {
        width: '30%',
      },
    },
    parallax: {
      aspectRatio: '1 / 1',
      [theme.breakpoints.up('sm')]: {
        aspectRatio: '1 / 1',
      },
      [theme.breakpoints.up('lg')]: {
        aspectRatio: '2 / 1',
      },
      [theme.breakpoints.up('xl')]: {
        aspectRatio: '3 / 1',
      },
    },
  })
);
