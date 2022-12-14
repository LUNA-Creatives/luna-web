import { useEffect } from 'react';
import { Grid, Container, Typography, Box, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import lottie from 'lottie-web/build/player/lottie_svg';
import { Icon } from '@iconify/react';

import useStyles from './style';
import { IHeader } from './types';
import rocketAnimation from '../../../assets/animations/rocketAnimation.json';
import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';
// import { useStore } from '../../../state/GlobalState';

export const Header = ({ data }: IHeader) => {
  const classes = useStyles();
  const animationId = 'rocketAnimation';
  const isDesktop = useMediaQuery(`(min-width:${ipadBreakpoint}px)`);
  // const setShowPopup = useStore((state) => state.setShowPopup);

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(`#${animationId}`) as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: rocketAnimation,
    });
  }, []);

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
            <Typography variant="subtitle1" className={classes.text}>
              {data.subHeadline}
            </Typography>
            <Typography variant="h1" className={classes.headline}>
              {data.headline}
            </Typography>
            <Typography variant="body1" className={classes.text}>
              {data.text}
            </Typography>
            {/* <Button
              color="primary"
              variant="contained"
              onClick={() => setShowPopup(true)}
              className={classes.button}
            >
              {data.button}
            </Button> */}
          </Box>
          <Box className={classes.animation} component={'div'}>
            <Box component={'div'} id={animationId} />
          </Box>
        </motion.div>
      </Container>
      {isDesktop && (
        <Container className={classes.secondaryContainer}>
          <Icon
            className={classes.icon}
            icon="gridicons:arrow-down"
            inline={true}
          />
          <Typography variant="h6">{data.subText}</Typography>
        </Container>
      )}
    </Grid>
  );
};
