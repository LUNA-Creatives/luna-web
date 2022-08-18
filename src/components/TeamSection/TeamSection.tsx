import { Grid, Typography, Box, Container } from '@material-ui/core';

import { Card } from '../Card';
import { ICard } from '../Card/types';
import useStyles from './style';

export const TeamSection = ({ data, headline }: any) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container>
        <Typography variant="h2" className={classes.headline}>
          {headline}
        </Typography>

        <Box className={classes.cardContainer}>
          {data.map((team: { value: ICard }, index: string) => (
            <Card
              key={index}
              name={team.value.name}
              role={team.value.role}
              profileImage={team.value.profileImage}
              gif={team.value.gif}
            />
          ))}
        </Box>
      </Container>
    </Grid>
  );
};
