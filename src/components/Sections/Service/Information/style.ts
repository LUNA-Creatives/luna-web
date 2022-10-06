import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
    },
    container: {
      maxWidth: 1600,
    },
    flexBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textBox: {
      width: '45%',
      color: theme.palette.primary.main,
    },
    upperCase: {
      textTransform: 'uppercase',
    },
    inlineBox: {
      display: 'inline-flex',
      width: '100%',
    },
  })
);
