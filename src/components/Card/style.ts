import { createStyles, makeStyles, Theme } from '@material-ui/core';
import {
  desktopBreakpoint,
  ipadBreakpoint,
} from '../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      textAlign: 'center',
      width: '100%',
      minHeight: '100%',

      marginBottom: '2rem',

      [theme.breakpoints.up(ipadBreakpoint)]: {
        width: '33%',
      },
      [theme.breakpoints.between(desktopBreakpoint, ipadBreakpoint)]: {
        width: '45vw',
      },
    },
    textBox: {
      color: theme.palette.primary.light,
      paddingBottom: 25,
    },
    imageBox: {
      position: 'relative',
      width: '100%',
      maxWidth: '100%',

      marginBottom: 20,
    },
    image: {
      boxShadow: '1px 1px 50px 2px #0d0d0f',
      width: '100%',
      height: '100%',
      borderRadius: 5,
      objectFit: 'cover',
    },
    imageWrapper: {
      position: 'absolute',

      height: '100%',
      width: '100%',

      borderRadius: 5,
      objectFit: 'cover',
    },
  })
);
