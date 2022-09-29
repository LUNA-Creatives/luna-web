import { Divider, Grid, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../utils/screenSizeBreakpoints';

export const CustomDivider = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Divider className={classes.divider} />
      </Container>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.dark,
    height: 50,
    [theme.breakpoints.up(ipadBreakpoint)]: {
      height: 200,
    },
  },
  container: {
    maxWidth: 1600,
  },
  divider: {
    width: '100%',
    backgroundColor: '#4D4D4D',
  },
}));
