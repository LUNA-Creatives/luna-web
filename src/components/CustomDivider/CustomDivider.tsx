import { Divider, Grid, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { ipadBreakpoint } from '../../utils/screenSizeBreakpoints';

export interface IDivider {
  hasBackgroundColor?: boolean;
}

export const CustomDivider = ({ hasBackgroundColor }: IDivider) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Divider
          sx={{
            borderColor: 'transparent',
            backgroundColor: hasBackgroundColor ? '#4D4D4D' : 'transparent',
          }}
          className={classes.divider}
        />
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
      height: 150,
    },
  },
  container: {
    maxWidth: 1600,
  },
  divider: {
    width: '100%',
  },
}));
