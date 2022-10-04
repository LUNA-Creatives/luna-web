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
      animation: '$sliderAnimation 100s linear infinite',
      display: 'flex',
      width: 'calc(22vw * 42)',
      [theme.breakpoints.up('sm')]: {
        width: 'calc(15vw * 42)',
      },
      [theme.breakpoints.up('md')]: {
        width: 'calc(10vw * 42)',
      },
      [theme.breakpoints.up('lg')]: {
        width: 'calc(8vw * 42)',
      },
      [theme.breakpoints.up('xl')]: {
        width: 'calc(6vw * 42)',
      },
    },
    slide: {
      borderRadius: '27%',
      backgroundColor: '#212121',
      display: 'flex',
      marginTop: 50,
      margin: '2vw',
      width: '20vw',
      justifyContent: 'center',
      [theme.breakpoints.up('sm')]: {
        width: '13vw',
        margin: '1vw',
      },
      [theme.breakpoints.up('md')]: {
        width: '8vw',
      },
      [theme.breakpoints.up('lg')]: {
        width: '6vw',
      },
      [theme.breakpoints.up('xl')]: {
        width: '4vw',
      },
    },
    box: {
      maxWidth: 1600,
    },
    heading: {
      paddingBottom: '5%',
    },
    iconBox: {
      maxWidth: '100%',
      padding: '20%',
      display: 'flex',
      justifyContent: 'center',
    },
    icon: {
      zIndex: 1,
      filter: `drop-shadow(0 0 0.1rem ${theme.palette.primary.dark})`,
      maxWidth: '100%',
      alignSelf: 'center',
    },
    '@keyframes sliderAnimation': {
      '0%': { transform: 'translate(0, 0)' },
      '100%': { transform: 'translate(calc(-50%), 0)' },
    },
  })
);
