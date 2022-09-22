import { useEffect, useState } from 'react';
import { Grid, Container, Box } from '@mui/material';
import lottie from 'lottie-web/build/player/lottie_svg';
import clsx from 'clsx';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import useStyles from './style';
import { INavbar } from './types';
import animation from '../../assets/animations/logoLoopingGlitchAnimation.json';
import { Overlay } from './Overlay';

export const Navbar = ({ data }: INavbar) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const classes = useStyles();
  const animationId = 'animation';

  useEffect(() => {
    if (showOverlay) {
      disableBodyScroll(document.body);
    } else if (!showOverlay) {
      enableBodyScroll(document.body);
    }
    const instance = lottie.loadAnimation({
      container: document.querySelector(`#${animationId}`) as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
    });
    const handleScroll = () => {
      const hide = window.scrollY > 50;
      if (hide) {
        setShowLogo(false);
      } else {
        setShowLogo(true);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      instance.destroy();
      document.removeEventListener('scroll', handleScroll);
    };
  }, [showOverlay]);

  return (
    <>
      <Grid className={classes.root}>
        <Box
          component={'div'}
          className={clsx(classes.overlay, {
            [classes.active]: showOverlay,
          })}
        >
          <Overlay data={data} />
        </Box>

        <Container className={classes.container}>
          <Box
            component={'div'}
            className={clsx(classes.animation, {
              [classes.easeInOut]: showOverlay || !showLogo,
            })}
            id={animationId}
          />
          <Box
            onClick={() => setShowOverlay(true)}
            component={'div'}
            className={clsx(classes.menuIcon, {
              [classes.disabled]: showOverlay,
            })}
          >
            <span className={`${classes.line} ${classes.left}`} />
            <span className={classes.line} />
            <span className={`${classes.line} ${classes.right}`} />
          </Box>
          <Box
            onClick={() => setShowOverlay(false)}
            component={'div'}
            className={clsx(classes.menuIcon, classes.closeIcon, {
              [classes.easeInOut]: !showOverlay,
            })}
          >
            <span className={`${classes.line} ${classes.rotateRight}`} />
            <span className={`${classes.line} ${classes.rotateLeft}`} />
          </Box>
        </Container>
      </Grid>
    </>
  );
};
