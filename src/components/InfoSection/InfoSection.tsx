import { Grid, Container, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

import useStyles from './style';

import { IInfoSection } from './types';

export const InfoSection = ({ infoSection }: IInfoSection) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h1" className={classes.headline}>
            {infoSection.headline}
          </Typography>
          <Typography variant="h1" className={classes.headline}>
            {infoSection.text}
          </Typography>
        </motion.div>
      </Container>
    </Grid>
  );
};
