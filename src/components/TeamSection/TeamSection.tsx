import { Grid } from '@material-ui/core';

import { Card } from '../Card';
import { ICard } from '../Card/types';
import useStyles from './style';

export const TeamSection = ({ data }: any) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      {data.map((team: { value: ICard }, index: string) => (
        <Card
          key={index}
          name={team.value.name}
          role={team.value.role}
          profileImage={team.value.profileImage}
          gif={team.value.gif}
        />
      ))}
    </Grid>
  );
};
