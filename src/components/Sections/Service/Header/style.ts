import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
    },
    container: {
      maxWidth: 1600,
      color: theme.palette.primary.main,
    },
    upperCase: {
      textTransform: 'uppercase',
      width: '30%',
      paddingBottom: 30,
    },
    imageBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '40vh',
    },
    image: {
      height: '50%',
    },
  })
);
