import { useEffect } from 'react';
import { Container, Box } from '@material-ui/core';
import { motion } from 'framer-motion';
import lottie from 'lottie-web/build/player/lottie_svg';

import useStyles from './style';
import { INavbar } from './types';
import animation from '../../assets/animations/logoLoopingGlitchAnimation.json';

export const Navbar = ({ logo }: INavbar) => {
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
    <Container
      component={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={classes.container}
    >
      <motion.div
        initial={{ y: -5 }}
        animate={{ y: 0 }}
        transition={{
          type: 'Inertia',
          repeat: Infinity,
          duration: 1,
          repeatType: 'reverse',
        }}
      >
        <Box className={classes.animation} id={animationId} />
      </motion.div>
    </Container>
  );
};
