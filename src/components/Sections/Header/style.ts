import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: { maxWidth: '100%' },
    container: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
      flexDirection: 'row',
    },
    headline: {
      fontWeight: 500,
      color: theme.palette.primary.light,
    },
  })
);
