import { Grid, Container, Box, Typography } from '@mui/material';

import useStyles from './style';
import { IServices, Card } from './types';

export const Services = ({ data }: IServices) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Box component={'div'} className={classes.textContainer}>
          <Typography variant="subtitle1">{data.subHeadline}</Typography>
          <Typography variant="h2">{data.headline}</Typography>
        </Box>
        <Box component={'div'} className={classes.cardContainer}>
          {data.card.map((card: Card, index: number) => (
            <Box key={index} component={'div'} className={classes.outerBox}>
              <Box component={'div'} className={classes.cardBox}>
                <img
                  className={classes.image}
                  src={card.imageSource}
                  alt="wavy"
                  loading="lazy"
                />
                <Box className={classes.innerBox} component={'div'} key={index}>
                  <Box component={'div'}>
                    <Typography variant="h2" className={classes.headline}>
                      {card.headline}
                    </Typography>
                    {card.text.map((text: string, index: number) => (
                      <Typography key={index} variant="body1">
                        {text}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Grid>
  );
};
