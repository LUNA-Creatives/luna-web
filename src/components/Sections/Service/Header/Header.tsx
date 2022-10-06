import { Grid, Container } from '@mui/material';
// import { Parallax } from 'react-scroll-parallax';

import { IHeader } from './types';
import useStyles from './style';

export const Header = ({ data }: IHeader) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      {/* <Parallax translateY={[0, -30]} className={classes.parallax}> */}
      <img
        className={classes.image}
        src={data.imageSource}
        alt={data.text}
        loading="lazy"
      />
      {/* </Parallax> */}
      <Container className={classes.container}></Container>
    </Grid>
  );
};
