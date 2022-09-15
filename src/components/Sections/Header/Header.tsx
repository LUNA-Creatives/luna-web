import { Grid, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import useStyles from './style';
import { IHeader } from './types';

export const Header = ({ data }: IHeader) => {
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
            {data.headline}
          </Typography>
          <Typography variant="h1" className={classes.headline}>
            {data.text}
          </Typography>
        </motion.div>
      </Container>
    </Grid>
  );
};
