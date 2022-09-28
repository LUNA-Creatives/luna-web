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
      justifyContent: 'center',
      maxWidth: 1600,
      paddingTop: '8%',
      paddingBottom: '8%',
    },
    box: {
      maxWidth: '45%',
    },
    textBox: {
      maxWidth: '45%',
    },
    sectionBox: {
      display: 'block',
      paddingBottom: '5%',
    },

    button: {
      borderRadius: 2,
      backgroundColor: theme.palette.primary.dark,
      border: `1px solid${theme.palette.primary.dark}`,
      padding: '15px 34px 15px 34px',
      textDecoration: 'none',
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.primary.dark,
      },
    },
  })
);
