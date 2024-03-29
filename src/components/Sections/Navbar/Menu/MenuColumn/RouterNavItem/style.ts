import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    },
    text: {
      marginRight: 5,
    },
    underline: {
      height: 2,
      display: 'block',
      width: 15,
      transition: 'width 0.2s ease-out',
      backgroundColor: theme.palette.primary.dark,
    },
    extended: {
      width: '100%',
      transition: 'width 0.2s ease-in',
    },
    active: {
      width: '100%',
      transition: 'width 0.2s ease-in',
    },
    toggleItems: {
      display: 'none',
    },
    showToggleItems: {
      display: 'block',
      paddingLeft: '15%',
    },
    iconBox: {
      display: 'flex',
      alignItems: 'center',
    },
  })
);
