import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: '100%',
      height: '100vh',
    },
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100vh',
      zIndex: 100,
    },
    container: {
      zIndex: 1,
      position: 'absolute',
      width: '100%',
      height: '100vh',
      backgroundColor: theme.palette.primary.dark,
    },
  })
);
