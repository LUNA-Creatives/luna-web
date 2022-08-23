import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: 100,
      paddingTop: 100,
    },
    container: {
      paddingBottom: 100,
      paddingTop: 100,
    },
    box: {
      maxWidth: 1600,
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
    text: {
      padding: 10,
    },
  })
);
