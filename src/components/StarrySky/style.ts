import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100vw',
      height: '100%',
      backgroundColor: theme.palette.primary.dark,
      overflow: 'hidden',
      position: 'relative',
    },
    sky: {
      width: '100%',
      height: '100vh',
      position: 'absolute',
      margin: 0,
      padding: 0,
    },

    shootingstars: {
      margin: 0,
      padding: 0,
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      overflow: 'hidden',
      transform:
        'translatex(calc(50vw - 50%)) translatey(calc(50vh - 50%))rotate(120deg)',
    },

    wish: {
      height: 2,
      top: 300,
      width: 100,
      margin: 0,
      opacity: 0,
      padding: 0,

      position: 'absolute',
      background: `linear-gradient(-45deg, white, rgba(0, 0, 255, 0))`,
      filter: 'drop-shadow(0 0 6px white)',
      overflow: 'hidden',
    },
  })
);
