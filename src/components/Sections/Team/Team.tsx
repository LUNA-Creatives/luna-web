import { Grid, Typography, Box, Container } from '@mui/material';

import { Card } from './Card';
import { ICard } from './Card/types';
import useStyles from './style';
import { ITeam } from './types';

export const Team = ({ data, headline }: ITeam) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h2" className={classes.headline}>
          {headline}
        </Typography>

        <Box component={'div'} className={classes.cardContainer}>
          {data.map((team: ICard, index: string) => (
            <Card
              key={index}
              name={team.name}
              role={team.role}
              profileImage={team.profileImage}
              gif={team.gif}
            />
          ))}
        </Box>
      </Container>
    </Grid>
  );
};
