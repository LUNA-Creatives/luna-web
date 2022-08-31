import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'fixed',
      right: 0,
      top: 0,
      margin: 15,

      display: 'flex',
      justifyContent: 'center',

      width: 0,
      zIndex: 1,
    },
    animation: {
      padding: 0,
      width: 150,
    },
  })
);
