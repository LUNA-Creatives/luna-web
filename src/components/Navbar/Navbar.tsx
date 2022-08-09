import { Container } from '@material-ui/core';
import { motion } from 'framer-motion';

import useStyles from './style';
import { LUNA_ICON_INVERTED_COLOR_SVG } from '../../utils/images';

export const Navbar = () => {
  const classes = useStyles();

  return (
    <Container
      component={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={classes.container}
    >
      <motion.div
        initial={{ y: -5 }}
        animate={{ y: 0 }}
        transition={{
          type: 'Inertia',
          repeat: Infinity,
          duration: 1,
          repeatType: 'reverse',
        }}
      >
        <img alt="logo" height={35} src={LUNA_ICON_INVERTED_COLOR_SVG} />
      </motion.div>
    </Container>
  );
};
