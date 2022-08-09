import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minWidth: '100vw',
      height: '100vh',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: 'black',
    },
    animation: {
      maxWidth: '100%',
    },
  })
);
