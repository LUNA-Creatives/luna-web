import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      paddingTop: '1rem',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        paddingTop: '5rem',
      },
    },
  })
);
