import { Divider, Grid, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Theme } from '@mui/material/styles';
import { ipadBreakpoint } from '../../utils/screenSizeBreakpoints';

export interface IDivider {
  backgroundColor?: string;
}

export const CustomDivider = ({ backgroundColor }: IDivider) => {
  const classes = useStyles();
  const background = {
    backgroundColor: backgroundColor,
  };

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        {backgroundColor && (
          <Divider style={background} className={classes.divider} />
        )}
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
      height: '10vw',
    },
  },
  container: {
    maxWidth: 1600,
  },
  divider: {
    width: '100%',
  },
}));
