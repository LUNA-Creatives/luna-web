import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
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
      position: 'relative',
      // top: -50,

      overflow: 'hidden',
    },
    image: {
      height: 'auto',
      width: '100%',
    },
  })
);
