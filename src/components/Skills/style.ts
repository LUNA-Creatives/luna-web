import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'black',
      paddingBottom: 100,
      paddingTop: 100,
    },
    container: {
      paddingBottom: 100,
      paddingTop: 100,
      color: 'white',
    },
    heading: {
      paddingBottom: '5%',
    },
    flexbox: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    box: {
      padding: 10,
    },
  })
);
