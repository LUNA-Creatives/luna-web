import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.primary.dark,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      maxWidth: 1600,
      paddingTop: '10%',
      paddingBottom: '10%',
    },
    button: {
      borderRadius: 2,
      backgroundColor: theme.palette.primary.dark,
      padding: '15px 34px 15px 34px',
      textDecoration: 'none',
      cursor: 'pointer',
    },
  })
);
