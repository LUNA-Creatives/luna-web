import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: { backgroundColor: 'black' },

    container: {
      padding: 10,
      paddingTop: '15vh',
      [theme.breakpoints.up('lg')]: {
        paddingTop: '25vh',
      },
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '100%',
    },
    headline: {
      color: 'white',

      paddingBottom: 50,

      [theme.breakpoints.up('lg')]: {
        textAlign: 'left',
        paddingBottom: '10%',
      },
    },
  })
);
