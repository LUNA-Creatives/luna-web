import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      height: '90vh',
      maxWidth: 1600,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
      flexDirection: 'row',
    },
    headline: {
      fontWeight: 600,
      color: theme.palette.primary.light,
    },
  })
);
