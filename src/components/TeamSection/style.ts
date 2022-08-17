import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: { backgroundColor: 'black' },
    container: {
      padding: 10,
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
      textAlign: 'center',
      [theme.breakpoints.up('lg')]: {
        textAlign: 'left',
        paddingBottom: '5rem',
      },
    },
  })
);
