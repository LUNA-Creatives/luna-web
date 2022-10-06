import { Grid, Container } from '@mui/material';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import { IHeader } from './types';
import useStyles from './style';

export const Header = ({ data }: IHeader) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <ParallaxBanner className={classes.parallax}>
        <ParallaxBannerLayer image={data.imageSource} speed={-20} />
      </ParallaxBanner>
      <Container className={classes.container}></Container>
    </Grid>
  );
};
