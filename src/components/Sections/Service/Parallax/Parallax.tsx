import { useState, useEffect } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import { IHeader } from './types';
import useStyles from './style';
import { ipadBreakpoint } from '../../../../utils/screenSizeBreakpoints';

export const Parallax = ({ data }: IHeader) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(`(min-width:${ipadBreakpoint}px)`);
  const [speedProp, setSpeedProp] = useState(-10);

  useEffect(() => {
    if (isDesktop) {
      setSpeedProp(-20);
    }
  }, [isDesktop]);

  return (
    <Grid className={classes.root}>
      <ParallaxBanner className={classes.parallax}>
        <ParallaxBannerLayer image={data.imageSource} speed={speedProp} />
      </ParallaxBanner>
    </Grid>
  );
};
