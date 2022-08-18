import { useMediaQuery } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { ipadBreakpoint } from '../../utils/screenSizeBreakpoints';
import useStyles from './style';
import { ICard } from './types';

export const Card = ({ name, role, profileImage, gif }: ICard) => {
  const [isShown, setIsShown] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(function () {
      if (isShown) {
        setIsShown(false);
      }
    }, 3000);
  });

  const isDesktop = useMediaQuery(`(min-width:${ipadBreakpoint}px)`);
  const ProfileCard = (
    <>
      <Box className={classes.imageBox}>
        {isShown && (
          <img alt="logo" className={classes.imageWrapper} src={gif} />
        )}
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
      onMouseOver={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {ProfileCard}
    </Box>
  ) : (
    <motion.div onPanStart={() => setIsShown(true)}>
      <Box className={classes.container}>{ProfileCard}</Box>
    </motion.div>
  );
};
