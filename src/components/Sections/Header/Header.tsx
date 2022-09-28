import { useEffect } from 'react';
import { Grid, Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import lottie from 'lottie-web/build/player/lottie_svg';

import useStyles from './style';
import { IHeader } from './types';
import rocketAnimation from '../../../assets/animations/rocketAnimation.json';

export const Header = ({ data }: IHeader) => {
  const classes = useStyles();
  const animationId = 'rocketAnimation';
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(`#${animationId}`) as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: rocketAnimation,
    });
  });

  const handleScroll = () => {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <motion.div
          className={classes.box}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box component={'div'} className={classes.textBox}>
            <Typography variant="h5" className={classes.text}>
              {data.subHeadline}
            </Typography>
            <Typography variant="h1" className={classes.headline}>
              {data.headline}
            </Typography>
            <Typography variant="body1" className={classes.text}>
              {data.text}
            </Typography>
            <Button onClick={handleScroll} className={classes.button}>
              {data.button}
            </Button>
          </Box>
          <Box className={classes.animation} component={'div'}>
            <Box component={'div'} id={animationId} />
          </Box>
        </motion.div>
      </Container>
    </Grid>
  );
};
