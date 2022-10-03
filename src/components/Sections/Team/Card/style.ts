import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../../../utils/screenSizeBreakpoints';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      textAlign: 'left',
      width: '45vw',
      minHeight: '100%',
      cursor: 'pointer',
      marginBottom: '2rem',

      [theme.breakpoints.up(ipadBreakpoint)]: {
        width: '22%',
      },
    },
    textBox: {
      color: theme.palette.primary.main,
      paddingBottom: 25,
    },
    imageBox: {
      position: 'relative',
      width: '100%',
      maxWidth: '100%',

      marginBottom: 20,
    },
    image: {
      boxShadow: `1px 1px 50px 2px  black`,
      width: '100%',
      height: '100%',
      borderRadius: 8,
      objectFit: 'cover',
    },
    imageWrapper: {
      position: 'absolute',

      height: '100%',
      width: '100%',

      borderRadius: 8,
      objectFit: 'cover',
    },
    text: {
      paddingBottom: 5,
    },
  })
);
