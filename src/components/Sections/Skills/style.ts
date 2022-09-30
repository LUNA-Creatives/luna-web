import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.main,
      overflow: 'hidden',
      [theme.breakpoints.up('sm')]: {
        paddingTop: 50,
      },
    },
    container: {},
    slider: {
      overflow: 'hidden',
      position: 'relative',
      width: '100vw',
    },
    slideTrack: {
      animation: '$scrollMobile 100s linear infinite',
      display: 'flex',
      width: 'calc(70px * 42)',
      [theme.breakpoints.up(1400)]: {
        width: 'calc(100px * 42)',
        animation: '$scrollDesktop 80s linear infinite',
      },
    },
    slide: {
      display: 'flex',
      marginTop: 50,
      margin: 10,
      width: 70,
      [theme.breakpoints.up(1400)]: {
        margin: 20,
        width: 100,
      },
    },
    box: {
      maxWidth: 1600,
    },
    heading: {
      paddingBottom: '5%',
    },
    iconBox: {
      backgroundColor: '#212121',
      borderRadius: 27,
      width: 70,
      padding: 10,
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.up(1400)]: {
        width: '4vw',
        padding: '20%',
      },
    },
    icon: {
      zIndex: 1,
      filter: `drop-shadow(0 0 0.1rem ${theme.palette.primary.dark})`,
      width: '100%',
    },
    '@keyframes scrollDesktop': {
      '0%': { transform: 'translate(0, 0)' },
      '100%': { transform: 'translate(calc(-140px * 21), 0)' },
    },
    '@keyframes scrollMobile': {
      '0%': { transform: 'translate(0, 0)' },
      '100%': { transform: 'translate(calc(-90px * 21), 0)' },
    },
  })
);
