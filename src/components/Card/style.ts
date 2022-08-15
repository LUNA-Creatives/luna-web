import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      textAlign: 'center',
      width: '100vw',
      minHeight: '100%',
      padding: 10,
      marginBottom: '2vh',
      [theme.breakpoints.up('md')]: {
        width: '30vw',
      },
      [theme.breakpoints.only('sm')]: {
        width: '45vw',
      },
    },
    card: {},
    textBox: {
      color: theme.palette.primary.light,
    },
    imageBox: {
      position: 'relative',
      width: '100%',
      maxWidth: '100%',

      marginBottom: 20,
    },
    image: {
      boxShadow: '1px 1px 50px 2px #0d0d0f',
      width: '100%',
      height: '100%',
      zZndex: 55,
      borderRadius: 5,
    },
    imageWrapper: {
      position: 'absolute',

      height: '100%',
      width: '100%',

      borderRadius: 5,

      objectFit: 'cover',
    },
  })
);
