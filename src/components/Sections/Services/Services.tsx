import { useEffect } from 'react';
import { Grid, Container, Box, Typography } from '@mui/material';

import useStyles from './style';
import { IServices, Card } from './types';

import yellow from '../../../assets/images/yellow.svg';
import pink from '../../../assets/images/pink.svg';
import green from '../../../assets/images/green.svg';

export const Services = ({ data }: IServices) => {
  const classes = useStyles();

  useEffect(() => {
    console.log('services', data);
  }, []);
  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Box component={'div'} className={classes.textContainer}>
          <Typography variant="subtitle1">{data.subHeadline}</Typography>
          <Typography variant="h1">{data.headline}</Typography>
        </Box>
        <Box component={'div'} className={classes.cardContainer}>
          {data.card.map((card: Card, index: number) => (
            <Box component={'div'} className={classes.outerBox}>
              <Box component={'div'} className={classes.cardBox}>
                {index === 0 && (
                  <img
                    className={classes.image}
                    src={pink}
                    alt=""
                    loading="lazy"
                  />
                )}
                {index === 1 && (
                  <img
                    className={classes.image}
                    src={yellow}
                    alt=""
                    loading="lazy"
                  />
                )}
                {index === 2 && (
                  <img
                    className={classes.image}
                    src={green}
                    alt=""
                    loading="lazy"
                  />
                )}
                <Box className={classes.innerBox} component={'div'} key={index}>
                  <Box component={'div'}>
                    <Typography variant="h2">{card.headline}</Typography>
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
