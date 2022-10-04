import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

import { Team, Footer, Navbar } from '../../components/Sections';
import data from '../../assets/data/data.json';
import useStyles from '../style';
import { SlsDbItem, TeamMember } from '../../types';
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
