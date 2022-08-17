import { Box, Grid } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';

import useStyles from './style';

import { logos } from '../../utils/data/logos';
import { useState, useEffect } from 'react';

const evenIndex = logos.filter((logo, index) => index % 2);

const oddIndex = logos.filter((logo) => {
  return logo.id % 2 !== 0;
});

export const ClientSection = () => {
  const classes = useStyles();
  const [newLogos, setNewLogos] = useState(evenIndex);
  const [showEvenIndex, setShowEvenOddIndex] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (showEvenIndex) {
        setShowEvenOddIndex(false);
        setNewLogos(oddIndex);
      } else if (!showEvenIndex) {
        setShowEvenOddIndex(true);
        setNewLogos(evenIndex);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [newLogos, showEvenIndex]);

  return (
    <Grid className={classes.container}>
      {newLogos.map((logo: any, index: number) => (
        <Box key={index}>
          <AnimatePresence key={index}>
            {showEvenIndex && (
              <Box className={classes.box}>
                <motion.img
                  className={classes.image}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1.2,
                  }}
                  transition={{ duration: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    transition: { duration: 0.5 },
                  }}
                  key={index}
                  src={logo.url}
                  alt={logo.alt}
                  width="150"
                />
              </Box>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!showEvenIndex && (
              <Box className={classes.box}>
                <motion.img
                  className={classes.image}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1.2,
                  }}
                  transition={{ duration: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    transition: { duration: 0.5 },
                  }}
                  key={index}
                  src={logo.url}
                  alt={logo.alt}
                  width="150"
                />
              </Box>
            )}
          </AnimatePresence>
        </Box>
      ))}
    </Grid>
  );
};
