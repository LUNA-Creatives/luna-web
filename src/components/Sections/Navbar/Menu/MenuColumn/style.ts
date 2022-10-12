import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { ipadBreakpoint } from '../../../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    textBox: {
      paddingTop: 10,
      paddingBottom: 10,
    },
    textContainer: {
      height: '100%',
      width: '100%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        placeContent: 'space-between',
      },
    },
    headline: {
      paddingBottom: 10,
      paddingTop: 10,
      textTransform: 'uppercase',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        paddingBottom: 20,
      },
    },
    linkBox: {
      width: 'fit-content',
      paddingBottom: 10,
    },
  })
);
