import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: 100,
    },
    container: {
      paddingBottom: 150,
    },
    slider: {
      overflow: 'hidden',
      position: 'relative',
      width: '100vw',
    },
    slideTrack: {
      animation: '$scrollMobile 80s linear infinite',
      display: 'flex',
      width: 'calc(150px * 14)',
      [theme.breakpoints.up('sm')]: {
        width: 'calc(250px * 14)',
        animation: '$scrollDesktop 80s linear infinite',
      },
    },
    slideTrackUneven: {
      animation: '$scrollMobile 80s linear infinite',
      display: 'flex',
      width: 'calc(150px * 14)',
      marginLeft: 75,
      [theme.breakpoints.up('sm')]: {
        marginLeft: 125,
        width: 'calc(250px * 14)',
        animation: '$scrollDesktop 80s linear infinite',
      },
    },
    slide: {
      width: 250,
      display: 'flex',
      marginTop: 50,

      [theme.breakpoints.up('sm')]: {
        margin: 50,
      },
    },
    box: {
      maxWidth: 1600,
    },
    heading: {
      paddingBottom: '5%',
    },
    iconBox: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '50%',
      width: 80,
      padding: 20,
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.up('sm')]: {
        width: 100,
      },
    },
    icon: {
      width: '100%',
    },
    '@keyframes scrollDesktop': {
      '0%': { transform: 'translate(0, 0)' },
      '100%': { transform: 'translate(calc(-50%), 0)' },
    },
    '@keyframes scrollMobile': {
      '0%': { transform: 'translate(0, 0)' },
      '100%': { transform: 'translate(calc(-150px * 7), 0)' },
    },
  })
);
