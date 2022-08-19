import { useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import { motion } from 'framer-motion';
import lottie from 'lottie-web/build/player/lottie_svg';

import useStyles from './style';
import animation from '../../assets/animations/flowyAnimation.json';

export const Animation = () => {
  const classes = useStyles();

  const animationId = 'animation';

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(`#${animationId}`) as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
    });
  }, []);

  return (
    <Container className={classes.container}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box className={classes.animation} id={animationId} />
      </motion.div>
    </Container>
  );
};
