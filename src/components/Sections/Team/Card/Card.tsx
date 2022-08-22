import { useMediaQuery } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { ipadBreakpoint } from '../../../../utils/screenSizeBreakpoints';
import useStyles from './style';
import { ICard } from './types';

export const Card = ({ name, role, profileImage, gif }: ICard) => {
  const classes = useStyles();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const variants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  const isDesktop = useMediaQuery(`(min-width:${ipadBreakpoint}px)`);
  const ProfileCard = (
    <>
      <Box className={classes.imageBox}>
        <motion.img
          ref={ref}
          variants={variants}
          animate={controls}
          initial="hidden"
          alt="logo"
          className={classes.imageWrapper}
          src={gif}
        />

        <img
          className={classes.image}
          alt="logo"
          height={35}
          src={profileImage}
        />
      </Box>
      <Box className={classes.textBox}>
        <Typography variant={'h6'}>{name}</Typography>
        <Typography variant={'body1'}>{role}</Typography>
      </Box>
    </>
  );
  return isDesktop ? (
    <Box
      className={classes.container}
      onMouseOver={() => controls.start('visible')}
      onMouseLeave={() => controls.start('hidden')}
    >
      {ProfileCard}
    </Box>
  ) : (
    <motion.div onPanStart={() => controls.start('visible')}>
      <Box className={classes.container}>{ProfileCard}</Box>
    </motion.div>
  );
};
