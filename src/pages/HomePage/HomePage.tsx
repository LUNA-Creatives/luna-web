import { useEffect, useState } from 'react';
import axios from 'axios';

import data from '../../assets/data/data.json';
import {
  ClientLogos,
  Header,
  Footer,
  Vision,
  Skills,
  Team,
  Navbar,
} from '../../components/Sections';
import { logos } from '../../assets/data/logos';
import '../../assets/fonts/fonts.css';
import { TeamMember } from '../TeamPage/types';
import { Skill } from './types';
import { SlsDbItem } from '../../types';
import { dbItemToItem } from '../../utils/dbItemToItem';

export const HomePage = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [icons, setIcons] = useState<Skill[]>();

  const fetchAndSetTeam = async () => {
    try {
      const { data } = await axios.get<SlsDbItem[]>('/api/team-member');
      const teamData: TeamMember[] = dbItemToItem(data);
      setTeam(teamData);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchAndSetIcons = async () => {
    try {
      const { data } = await axios.get<SlsDbItem[]>('/api/icons');
      const iconsData: Skill[] = dbItemToItem(data);
      setIcons(iconsData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAndSetTeam();
    fetchAndSetIcons();
  }, []);

  return (
    <>
      <Navbar data={data} />
      <Header data={data.header} />
      {icons && (
        <Skills
          heading={data.skills.heading}
          techIcons={icons[0].techIcons}
          helperIcons={icons[0].helperIcons}
          designIcons={icons[0].designIcons}
        />
      )}
      <ClientLogos logos={logos} />
      <Vision data={data.vision} />
      <Team data={team} headline={data.team.headline} />
      <Footer data={data.footer} />
    </>
  );
};
