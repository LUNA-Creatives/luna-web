import { Grid, Container, Box } from '@mui/material';

import { Card } from './Card';
import useStyles from './style';
import { IOffers } from './types';
import { Card as CardType } from './Card/types';

export const OurOffers = ({ data }: IOffers) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.cardsContainer} component={'div'}>
          {data.map((card: CardType, index: number) => (
            <Box key={card.id} className={classes.cardBox} component={'div'}>
              <Card data={card} />
            </Box>
          ))}
        </Box>
      </Container>
    </Grid>
  );
};
