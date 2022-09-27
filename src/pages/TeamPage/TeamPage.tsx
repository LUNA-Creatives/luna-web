import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

import { Team } from '../../components/Sections/Team';
import data from '../../assets/data/data.json';
import { Footer } from '../../components/Sections/Footer';
import { Navbar } from '../../components/Navbar';
import useStyles from '../Styling/style';
import { SlsDbItem } from '../../types/types';
import { TeamMember } from './types';
import { dbItemToItem } from '../../utils/dbItemToItem';

export const TeamPage = () => {
  const classes = useStyles();
  const [team, setTeam] = useState<TeamMember[]>([]);

  const fetchAndSetTeam = async () => {
    try {
      const { data } = await axios.get<SlsDbItem[]>('/api/team-member');
      const teamData: TeamMember[] = dbItemToItem(data);
      setTeam(teamData);
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
