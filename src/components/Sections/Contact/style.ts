import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.info.main,
    },
    container: {
      maxWidth: 1600,
      paddingTop: 100,
      paddingBottom: 100,
    },
    flexBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textBox: {
      width: '100%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        width: '40%',
      },
    },
    headline: {
      paddingBottom: 20,
    },
    imageBox: {
      width: 'auto',
      alignSelf: 'center',
    },
    image: {
      display: 'block',
    },
    inline: {
      display: 'inline-grid',
    },
    button: {
      marginTop: 30,
      borderRadius: 2,
      padding: '15px 34px',
      textDecoration: 'none',
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.dark,
      border: `1px solid${theme.palette.primary.dark}`,
      '&:hover': {
        color: theme.palette.primary.dark,
        backgroundColor: 'transparent',
      },
      [theme.breakpoints.down(ipadBreakpoint)]: {
        width: '100%',
      },
    },
  })
);
