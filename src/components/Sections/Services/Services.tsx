import { useEffect } from 'react';
import { Grid, Container, Box, Typography } from '@mui/material';

import useStyles from './style';
import { IServices, Card } from './types';

export const Services = ({ data }: IServices) => {
  const classes = useStyles();

  useEffect(() => {
    console.log('services', data);
  }, []);
  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="subtitle1">{data.subHeadline}</Typography>
        <Typography variant="h1">{data.headline}</Typography>
        <Box component={'div'} className={classes.cardContainer}>
          {data.card.map((card: Card, index: number) => (
            <Box component={'div'} className={classes.cardBox}>
              <Box className={classes.box} component={'div'} key={index}>
                <Typography variant="h3">{card.headline}</Typography>
                {card.text.map((text: string, index: number) => (
                  <Typography variant="body1">{text}</Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Grid>
  );
};
