import { Grid } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';

import useStyles from './style';
import { IStarrySky } from './types';

export const StarrySky = ({ children }: IStarrySky) => {
  const classes = useStyles();
  const amount = 100;
  const [vw, setVw] = useState(window.innerWidth);
  const [showSky, setShowSky] = useState(true);

  const onResize = useCallback(() => {
    setVw(window.innerWidth);
    setShowSky(false);
  }, []);
  useEffect(() => {
    if (!showSky) {
      setShowSky(true);
    }
  }, [showSky]);
  const { ref } = useResizeDetector({ onResize });

  const randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };
  const getRandomY = () => {
    return Math.floor(
      Math.random() * Math.floor(window.innerHeight)
    ).toString();
  };
  const getRandomX = (vw: number) => {
    return Math.floor(Math.random() * Math.floor(vw)).toString();
  };
  const Y = () => {
    return Math.floor(
      Math.random() * Math.floor(window.innerHeight)
    ).toString();
  };
  const X = (vw: number) => {
    return Math.floor(Math.random() * Math.floor(vw)).toString();
  };

  const starContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 2,
      },
    },
  };
  const starItem = {
    hidden: { opacity: 0, x: 0, width: 100 },
    show: {
      opacity: 1,
      x: '50vh',
      width: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <Grid className={classes.root} ref={ref}>
      {showSky && (
        <>
          <motion.svg className={classes.sky}>
            {[...Array(amount)].map((x, index) => (
              <motion.circle
                cx={getRandomX(vw)}
                cy={getRandomY()}
                r={randomRadius()}
                stroke="none"
                strokeWidth="3"
                fill="white"
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, scale: 1.5 }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 1,
                  ease: 'linear',
                  delay: index / 20,
                }}
              />
            ))}
          </motion.svg>

          <motion.div
            className={classes.shootingstars}
            variants={starContainer}
            initial="hidden"
            animate="show"
          >
            {[...Array(amount)].map((x, y) => (
              <motion.div
                key={y}
                className={classes.wish}
                style={{
                  left: `${X(vw)}px`,
                  top: `${Y()}px`,
                }}
                variants={starItem}
              />
            ))}
          </motion.div>
        </>
      )}
      {children}
    </Grid>
  );
};
