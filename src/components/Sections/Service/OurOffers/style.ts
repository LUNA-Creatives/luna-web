import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      maxWidth: 1600,
    },
    cardsContainer: {
      [theme.breakpoints.up(ipadBreakpoint)]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    cardBox: {
      width: '100%',
      [theme.breakpoints.up(ipadBreakpoint)]: {
        width: '31%',
      },
    },
  })
);
