import { Grid, Typography, Container, Box } from '@mui/material';

import useStyles from './style';
import { IVision } from './types';
import happy from '../../../assets/images/happy.jpg';
import lunaTeam from '../../../assets/images/lunaTeam.jpg';
import discussion from '../../../assets/images/discussion.jpg';

export const Vision = ({ data }: IVision) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.headline} variant={'h2'}>
          {data.headline}
        </Typography>
        <Grid container item xs={12}>
          <Grid item xs={12} className={classes.flexContainer}>
            <Box component={'div'} className={classes.textBox}>
              <Typography variant={'h3'}>{data.vision.headline}</Typography>
              <Typography variant={'h6'}> {data.vision.body}</Typography>
            </Box>
            <Box component={'div'} width={'60%'} sx={{ width: '100%' }}>
              <img
                className={classes.image}
                src={discussion}
                alt=""
                loading="lazy"
              />
            </Box>
          </Grid>
          <Grid item xs={12} className={classes.flexContainer}>
            <Box component={'div'} width={'90%'} sx={{ width: '100%' }}>
              <img
                className={classes.image}
                src={lunaTeam}
                alt=""
                loading="lazy"
              />
            </Box>
            <Box component={'div'} className={classes.textBox}>
              <Typography variant={'h3'}>
                {data.mission.punchline.first}
              </Typography>
              <Typography variant={'h3'}>
                {data.mission.punchline.second}
              </Typography>
              <Typography variant={'h3'}>
                {data.mission.punchline.third}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} className={classes.flexContainer}>
            <Box component={'div'} className={classes.textBox}>
              <Typography variant={'h3'}>{data.mission.headline}</Typography>
              <Typography variant={'h6'}> {data.mission.body}</Typography>
            </Box>
            <Box component={'div'} sx={{ width: '100%' }} width={'60%'}>
              <img
                className={classes.image}
                src={happy}
                alt=""
                loading="lazy"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
