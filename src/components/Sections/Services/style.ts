import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.light,
    },
    container: {
      maxWidth: 1600,
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardBox: {
      height: '50vh',
      width: '30%',
      padding: '5% 30px 30px 30px',
      backgroundColor: '#292929',
      borderRadius: 8,
    },
    box: {
      borderRadius: 8,
    },
  })
);
