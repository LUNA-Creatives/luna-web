import { Box, Grid } from '@mui/material';

import useStyles from './style';
import { ISkills } from './types';

export const Skills = ({ icons }: ISkills) => {
  const classes = useStyles();

  const sliderArray = icons.concat(icons);

  return (
    <Grid className={classes.root}>
      <Grid className={classes.container}>
        <Box component={'div'} className={classes.slider}>
          <Box component={'div'} className={classes.slideTrack}>
            {sliderArray.map((icon: any, index: number) => (
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
