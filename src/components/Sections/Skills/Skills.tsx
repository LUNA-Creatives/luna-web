import { Container, Box, Typography, Grid } from '@material-ui/core';

import useStyles from './style';
import { ISkills } from './types';

export const Skills = ({ skills }: ISkills) => {
  const classes = useStyles();
  const techIcons = skills.icons[0].value.icons.techIcons;
  const designIcons = skills.icons[0].value.icons.designIcons;
  const helperIcons = skills.icons[0].value.icons.helperIcons;

  const sliderArray1 = techIcons.concat(techIcons);
  const sliderArray2 = designIcons.concat(designIcons);
  const sliderArray3 = helperIcons.concat(helperIcons);

  return (
    <Grid className={classes.root}>
      <Grid className={classes.container}>
        <Container className={classes.box}>
          <Typography className={classes.heading} variant="h1">
            {skills.heading}
          </Typography>
        </Container>
        <Box className={classes.slider}>
          <Box className={classes.slideTrack}>
            {sliderArray1.map((icon: any, index: number) => (
              <Box key={index} className={classes.slide}>
                <Box className={classes.iconBox}>
                  <img className={classes.icon} src={icon.url} alt={icon.alt} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className={classes.slider}>
          <Box className={classes.slideTrackUneven}>
            {sliderArray2.map((icon: any, index: number) => (
              <Box key={index} className={classes.slide}>
                <Box className={classes.iconBox}>
                  <img className={classes.icon} src={icon.url} alt={icon.alt} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className={classes.slider}>
          <Box className={classes.slideTrack}>
            {sliderArray3.map((icon: any, index: number) => (
              <Box key={index} className={classes.slide}>
                <Box className={classes.iconBox}>
                  <img className={classes.icon} src={icon.url} alt={icon.alt} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
