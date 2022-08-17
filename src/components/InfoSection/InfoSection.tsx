import { useEffect } from 'react';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import lottie from 'lottie-web/build/player/lottie_svg';

import useStyles from './style';
import flowyAnimation from '../../utils/animations/flowyAnimation.json';
import { IInfoSection } from './types';

export const InfoSection = ({ headline }: IInfoSection) => {
  const classes = useStyles();

  const flowyAnimationId = 'flowyAnimation';

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(`#${flowyAnimationId}`) as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: flowyAnimation,
    });
  }, []);

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Typography
          variant="h3"
          className={classes.headline}
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {headline}
        </Typography>
        <Box className={classes.animation} id={flowyAnimationId} />
      </Container>
    </Grid>
  );
};
