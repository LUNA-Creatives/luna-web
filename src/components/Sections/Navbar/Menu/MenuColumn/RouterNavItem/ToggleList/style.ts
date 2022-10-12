import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    underline: {
      height: 2,
      display: 'block',
      width: 15,
      transition: 'width 0.2s ease-out',
      backgroundColor: theme.palette.primary.dark,
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    },
    extended: {
      width: '100%',
      transition: 'width 0.2s ease-in',
    },
  })
);
