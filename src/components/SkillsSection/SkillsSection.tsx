import { Grid, Container, Box, Typography } from '@material-ui/core';

import useStyles from './style';
import { ISkillsSection } from './types';

export const SkillsSection = ({ skillsSection }: ISkillsSection) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid className={classes.container}>
        <Container>
          <Typography className={classes.heading} variant="h2">
            {skillsSection.heading}
          </Typography>
          <Box className={classes.flexbox}>
            {skillsSection.skills.map((text, index) => (
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
