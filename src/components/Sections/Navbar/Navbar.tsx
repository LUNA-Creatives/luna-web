import { useEffect, useState } from 'react';
import { Grid, Container, Box } from '@mui/material';
import lottie from 'lottie-web/build/player/lottie_svg';
import clsx from 'clsx';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Link as RouterLink } from 'react-router-dom';

import useStyles from './style';
import { INavbar } from './types';
import animation from '../../../assets/animations/logoLoopingGlitchAnimation.json';
import { Menu } from './Menu';

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
  });
  const LogoButton = (
    <RouterLink
      to={'/'}
      onClick={() => window.scrollTo(0, 0) as any}
      className={clsx(classes.animation, {
        [classes.easeInOut]: showOverlay || !showLogo,
      })}
      id={animationId}
    />
  );
  const MenuButton = (
    <Box
      component={'div'}
      onClick={() => setShowOverlay(true)}
      className={clsx(classes.menuButton, {
        [classes.buttonBackground]: !showOverlay,
        [classes.disabled]: showOverlay,
      })}
    >
      <Box component={'div'} className={classes.menuIcon}>
        <div className={classes.line} />
        <div className={classes.line} />
        <div className={classes.line} />
      </Box>
    </Box>
  );
  const CloseButton = (
    <Box
      component={'div'}
      onClick={() => setShowOverlay(false)}
      className={clsx(classes.menuButton, {
        [classes.easeInOut]: !showOverlay,
      })}
    >
      <Box
        component={'div'}
        className={clsx(classes.menuIcon, classes.closeIcon)}
      >
        <span className={`${classes.right} ${classes.rotate}`} />
        <span className={`${classes.left} ${classes.rotate}`} />
      </Box>
    </Box>
  );

  return (
    <>
      <Grid className={classes.root}>
        <Container className={classes.container}>
          {LogoButton}
          {MenuButton}
          {CloseButton}
        </Container>
      </Grid>
      <Box
        component={'div'}
        className={clsx(classes.overlay, {
          [classes.active]: showOverlay,
        })}
      >
        {showOverlay && (
          <Menu
            closeOverlay={(prop: boolean) => setShowOverlay(prop)}
            data={data.navbar}
          />
        )}
      </Box>
    </>
  );
};
