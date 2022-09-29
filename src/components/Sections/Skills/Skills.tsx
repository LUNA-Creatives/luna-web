import { Container, Box, Typography, Grid } from '@mui/material';

import useStyles from './style';
import { ISkills } from './types';

export const Skills = ({
  techIcons,
  designIcons,
  helperIcons,
  heading,
}: ISkills) => {
  const classes = useStyles();

  const sliderArray1 = techIcons.concat(techIcons);
  const sliderArray2 = designIcons.concat(designIcons);
  const sliderArray3 = helperIcons.concat(helperIcons);

  return (
    <Grid className={classes.root}>
      <Grid className={classes.container}>
        <Container className={classes.box}>
          <Typography className={classes.heading} variant="h2">
            {heading}
          </Typography>
        </Container>
        <Box component={'div'} className={classes.slider}>
          <Box component={'div'} className={classes.slideTrack}>
            {sliderArray1.map((icon: any, index: number) => (
              <Box component={'div'} key={index} className={classes.slide}>
                <Box component={'div'} className={classes.iconBox}>
                  <img className={classes.icon} src={icon.url} alt={icon.alt} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box component={'div'} className={classes.slider}>
          <Box component={'div'} className={classes.slideTrackUneven}>
            {sliderArray2.map((icon: any, index: number) => (
              <Box component={'div'} key={index} className={classes.slide}>
                <Box component={'div'} className={classes.iconBox}>
                  <img className={classes.icon} src={icon.url} alt={icon.alt} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box component={'div'} className={classes.slider}>
          <Box component={'div'} className={classes.slideTrack}>
            {sliderArray3.map((icon: any, index: number) => (
              <Box component={'div'} key={index} className={classes.slide}>
                <Box component={'div'} className={classes.iconBox}>
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
