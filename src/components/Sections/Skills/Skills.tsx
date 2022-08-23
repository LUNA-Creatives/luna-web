import { Grid, Container, Box, Typography } from '@material-ui/core';

import useStyles from './style';
import { ISkills } from './types';

export const Skills = ({ skills }: ISkills) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid className={classes.container}>
        <Container className={classes.box}>
          <Typography className={classes.heading} variant="h1">
            {skills.heading}
          </Typography>
          <Box className={classes.flexbox}>
            {skills.skills.map((text, index) => (
              <Typography
                key={index}
                variant={'body1'}
                className={classes.text}
              >
                {text}
              </Typography>
            ))}
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
