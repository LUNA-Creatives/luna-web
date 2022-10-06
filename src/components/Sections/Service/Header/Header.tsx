import { Grid, Container, Typography, Box } from '@mui/material';

import { IHeader } from './types';
import useStyles from './style';

export const Header = ({ data }: IHeader) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Box component={'div'} className={classes.imageBox}>
          <img
            className={classes.image}
            src={data.imageSource}
            alt="wavy"
            loading="lazy"
          />
        </Box>
        <Typography className={classes.upperCase} variant={'h2'}>
          {data.headline}
        </Typography>
      </Container>
    </Grid>
  );
};
