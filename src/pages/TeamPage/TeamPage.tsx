import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

import { Team } from '../../components/Sections/Team';
import data from '../../assets/data/data.json';
import { Footer } from '../../components/Sections/Footer';
import { Navbar } from '../../components/Navbar';
import useStyles from '../styling/style';
import ITeamPage from '../../types/pages/TeamPage';

export const TeamPage = () => {
  const classes = useStyles();
  const [team, setTeam] = useState<ITeamPage[]>([]);

  const fetchAndSetTeam = async () => {
    try {
      const { data } = await axios.get<ITeamPage[]>('/api/team-member');

      setTeam(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchAndSetTeam();
  }, []);
  return (
    <Grid className={classes.root}>
      <Navbar data={data} />
      <Team data={team} headline={data.team.headline} />
      <Footer data={data.footer} />
    </Grid>
  );
};
