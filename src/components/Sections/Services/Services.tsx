import { Grid, Container, Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

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
          {data.card.map((card: Card) => (
            <RouterLink
              key={card.id}
              to={'services' + card.slug}
              onClick={() => window.scrollTo(0, 0)}
              className={classes.outerBox}
            >
              <Box
                component={'div'}
                className={classes.cardBox}
                sx={{
                  '&:hover': {
                    border: `3px solid${card.borderColor}`,
                  },
                }}
              >
                <img
                  className={classes.image}
                  src={card.imageSource}
                  alt="wavy"
                  loading="lazy"
                />
                <Box className={classes.innerBox} component={'div'}>
                  <Box component={'div'}>
                    <Typography variant="h2" className={classes.headline}>
                      {card.headline}
                    </Typography>
                    {card.listItems.map((text: string) => (
                      <Typography key={text} variant="body1">
                        {text}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </RouterLink>
          ))}
        </Box>
      </Container>
    </Grid>
  );
};
