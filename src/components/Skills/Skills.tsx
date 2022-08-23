import { Grid, Container, Box, Typography } from '@material-ui/core';

import useStyles from './style';
import { ISkills } from './types';

export const Skills = ({ skills }: ISkills) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid className={classes.container}>
        <Container>
          <Typography className={classes.heading} variant="h2">
            {skills.heading}
          </Typography>
          <Box className={classes.flexbox}>
            {skills.skills.map((text, index) => (
              <Typography key={index} variant={'body1'} className={classes.box}>
                {text}
              </Typography>
            ))}
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
