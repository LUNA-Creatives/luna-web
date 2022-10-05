import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import clsx from 'clsx';

export const CloseButton = () => {
  const classes = useStyles();
  return (
    <Box
      component={'div'}
      className={clsx(classes.menuIcon, classes.closeIcon)}
    >
      <span className={`${classes.right} ${classes.rotate}`} />
      <span className={`${classes.left} ${classes.rotate}`} />
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  menuIcon: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 9999,
    height: 30,

    cursor: 'pointer',
    margin: 10,
  },
  closeIcon: {
    justifyContent: 'center',
  },
  rotate: {
    height: 2,
    width: 35,
    display: 'block',
    marginBottom: 4,
    backgroundColor: theme.palette.primary.main,
  },
  right: {
    transform: 'translate(0px, 6px) rotate(45deg)',
  },
  left: {
    transform: 'translate(0px, 0px) rotate(-45deg)',
  },
}));
