import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
    },
    container: {
      maxWidth: 1600,
      color: theme.palette.primary.main,
      paddingBottom: 75,
    },
    textBox: {
      paddingTop: 10,
      paddingBottom: 10,
    },
    headline: {
      paddingBottom: 10,
    },
    bold: {
      fontWeight: 600,
    },
    upperCase: {
      textTransform: 'uppercase',
    },
    linkBox: {
      width: '100%',
    },
    link: {
      cursor: 'pointer',
    },
    inlineBox: {
      display: 'inline-flex',
    },
  })
);
