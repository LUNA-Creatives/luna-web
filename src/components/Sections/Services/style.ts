import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.light,
    },
    container: {
      minHeight: '100%',
      maxWidth: 1600,
    },
    cardContainer: {
      minHeight: '100%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    outerBox: {
      paddingBottom: 50,
      width: '100%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        width: '31%',
      },
    },
    cardBox: {
      overflow: 'hidden',
      height: '100%',
      width: '100%',
      backgroundColor: '#292929',
      borderRadius: 8,
    },
    textContainer: {
      paddingTop: 50,
      paddingBottom: 50,
    },
    image: {
      width: '100%',
      minHeight: 150,
      objectFit: 'cover',
    },
    innerBox: {
      padding: '30% 30px 30px 30px',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        padding: '35% 30px 30px 30px',
      },
    },
    headline: {
      paddingBottom: '5%',
    },
  })
);