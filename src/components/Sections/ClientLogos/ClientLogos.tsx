import { Box, Container, Grid, Typography } from '@mui/material';
import { AnimatePresence, AnimatePresenceProps, motion } from 'framer-motion';

import useStyles from './style';
// import { logos } from '../../../assets/data/logos';
import { useState, useEffect } from 'react';
import { ILogos } from './types';

interface NewAnimatePresenceProps
  extends Omit<AnimatePresenceProps, 'children'> {
  children: React.ReactNode;
}

export const ClientLogos = ({ logos }: ILogos) => {
  const classes = useStyles();
  const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

  const evenIndex = logos.filter((logo, index) => index % 2);
  const oddIndex = logos.filter((logo) => {
    return logo.id % 2 !== 0;
  });

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showEvenIndex]);

  return (
    <Grid className={classes.root}>
      <Grid className={classes.border}>
        <Container className={classes.container}>
          {newLogos.map((logo: any, index: number) => (
            <Box component={'div'} className={classes.boxes} key={index}>
              <NewAnimatePresence>
                {showEvenIndex && (
                  <Box component={'div'} className={classes.box}>
                    {logo.url ? (
                      <motion.img
                        className={classes.logoContainer}
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
                      />
                    ) : (
                      <motion.div
                        className={classes.textContainer}
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
                      >
                        <Typography variant="subtitle1">{logo.alt}</Typography>
                      </motion.div>
                    )}
                  </Box>
                )}
              </NewAnimatePresence>
              <NewAnimatePresence>
                {!showEvenIndex && (
                  <Box component={'div'} className={classes.box}>
                    {logo.url ? (
                      <motion.img
                        className={classes.logoContainer}
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
                      />
                    ) : (
                      <motion.div
                        className={classes.textContainer}
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
                      >
                        <Typography variant="subtitle1">{logo.alt}</Typography>
                      </motion.div>
                    )}
                  </Box>
                )}
              </NewAnimatePresence>
            </Box>
          ))}
        </Container>
      </Grid>
    </Grid>
  );
};
