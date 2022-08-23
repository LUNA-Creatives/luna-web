import { useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import { motion } from 'framer-motion';
import lottie from 'lottie-web/build/player/lottie_svg';

import useStyles from './style';
import animation from '../../assets/animations/glitchMoonAnimation.json';

export const AnimationHero = () => {
  const classes = useStyles();

  const animationId = 'animation';

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(`#${animationId}`) as Element,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animation,
    });
  }, []);

  return (
    <Container className={classes.container}>
      <motion.div
        className={classes.animationBox}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 0,
          transition: { duration: 3.5 },
        }}
      >
        <Box className={classes.animation} id={animationId} />
      </motion.div>
    </Container>
  );
};
